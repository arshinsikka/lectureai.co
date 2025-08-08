import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistEntrySchema, insertContactMessageSchema } from "@shared/schema";
import { sendWaitlistNotification, sendContactNotification } from "./email";
import { z } from "zod";
import path from "path";
import express from "express";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve static files from client/public directory
  const publicPath = path.resolve(import.meta.dirname, "..", "client", "public");
  app.use(express.static(publicPath));
  // Waitlist endpoint
  app.post("/api/waitlist", async (req, res) => {
    try {
      const validatedData = insertWaitlistEntrySchema.parse(req.body);
      const entry = await storage.addToWaitlist(validatedData);
      
      // Send email notification asynchronously (don't wait for it)
      sendWaitlistNotification(entry).catch(error => {
        console.error("Failed to send waitlist notification:", error);
      });
      
      res.json({ success: true, entry });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid input data", details: error.errors });
      } else if (error instanceof Error && error.message === "Email already exists in waitlist") {
        res.status(409).json({ error: "Email already registered in waitlist" });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.saveContactMessage(validatedData);
      
      // Send email notification asynchronously (don't wait for it)
      sendContactNotification(message).catch(error => {
        console.error("Failed to send contact notification:", error);
      });
      
      res.json({ success: true, message });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid input data", details: error.errors });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });

  // Get waitlist entries (for admin purposes)
  app.get("/api/waitlist", async (req, res) => {
    try {
      const entries = await storage.getWaitlistEntries();
      res.json({ entries });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Get contact messages (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json({ messages });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
