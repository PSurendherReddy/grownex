import {
  pgTable,
  serial,
  text,
  varchar,
  timestamp,
  jsonb,
  integer,
  boolean,
  primaryKey,
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// Service Groups Table
export const serviceGroups = pgTable('service_groups', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 256 }).notNull(),
  slug: varchar('slug', { length: 256 }).notNull().unique(),
  description: text('description'),
});

export const serviceGroupsRelations = relations(serviceGroups, ({ many }) => ({
  services: many(services),
}));

// Services Table
export const services = pgTable('services', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 256 }).notNull(),
  slug: varchar('slug', { length: 256 }).notNull().unique(),
  description: text('description'),
  serviceGroupId: integer('service_group_id')
    .notNull()
    .references(() => serviceGroups.id),
  heroDescription: text('hero_description'),
  heroIllustration: varchar('hero_illustration', { length: 256 }),
  introTitle: text('intro_title'),
  introContent: text('intro_content'),
  keyFeaturesTitle: text('key_features_title'),
  keyFeatures: jsonb('key_features').$type<{ title: string; description: string }[]>(),
  processTitle: text('process_title'),
  processSteps: jsonb('process_steps').$type<{ step: number; title: string; description: string }[]>(),
  stats: jsonb('stats').$type<{ value: string; label: string }[]>().notNull().default('[]'),
  caseStudySlug: varchar('case_study_slug', { length: 256 }),
});

export const servicesRelations = relations(services, ({ one }) => ({
  serviceGroup: one(serviceGroups, {
    fields: [services.serviceGroupId],
    references: [serviceGroups.id],
  }),
}));

// Portfolio Items Table
export const portfolioItems = pgTable('portfolio_items', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 256 }).notNull(),
  slug: varchar('slug', { length: 256 }).notNull().unique(),
  category: varchar('category', { length: 100 }),
  description: text('description'),
  imageUrl: varchar('image_url', { length: 512 }),
  client: varchar('client', { length: 256 }),
  challenge: text('challenge'),
  solution: text('solution'),
});

export const portfolioItemsRelations = relations(portfolioItems, ({ many }) => ({
  results: many(portfolioResults),
}));

// Portfolio Results Table
export const portfolioResults = pgTable('portfolio_results', {
  id: serial('id').primaryKey(),
  metric: varchar('metric', { length: 100 }),
  value: varchar('value', { length: 100 }),
  description: text('description'),
  portfolioItemId: integer('portfolio_item_id')
    .notNull()
    .references(() => portfolioItems.id, { onDelete: 'cascade' }),
});

export const portfolioResultsRelations = relations(portfolioResults, ({ one }) => ({
  portfolioItem: one(portfolioItems, {
    fields: [portfolioResults.portfolioItemId],
    references: [portfolioItems.id],
  }),
}));

// Testimonials Table
export const testimonials = pgTable('testimonials', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }).notNull(),
  title: varchar('title', { length: 256 }),
  quote: text('quote').notNull(),
});

// Partners Table
export const partners = pgTable('partners', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }).notNull().unique(),
});

// Blog Posts Table
export const blogPosts = pgTable('blog_posts', {
  id: serial('id').primaryKey(),
  slug: varchar('slug', { length: 256 }).notNull().unique(),
  title: varchar('title', { length: 256 }).notNull(),
  author: varchar('author', { length: 256 }),
  date: timestamp('date').defaultNow(),
  category: varchar('category', { length: 100 }),
  excerpt: text('excerpt'),
  content: text('content').notNull(),
});

// Team Members Table
export const teamMembers = pgTable('team_members', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }).notNull(),
  role: varchar('role', { length: 256 }),
  bio: text('bio'),
});

// Leads Table (for Contact Form)
export const leads = pgTable('leads', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }).notNull(),
  email: varchar('email', { length: 256 }).notNull(),
  subject: text('subject'),
  message: text('message'),
  createdAt: timestamp('created_at').defaultNow(),
});

// Chat Messages Table
export const chatMessages = pgTable('chat_messages', {
  id: serial('id').primaryKey(),
  sessionId: varchar('session_id', { length: 256 }).notNull(),
  role: varchar('role', { enum: ['user', 'model'] }).notNull(),
  content: text('content').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});
