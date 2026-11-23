// Temporary mock data for the dashboard UI. Replace with Prisma queries once the database is set up.

export interface MockUser {
  id: string;
  name: string;
  email: string;
  image: string | null;
  isPro: boolean;
}

export interface MockItemType {
  id: string;
  name: string;
  label: string;
  icon: string;
  color: string;
  isSystem: boolean;
  itemCount: number;
}

export interface MockCollection {
  id: string;
  name: string;
  description: string;
  isFavorite: boolean;
  itemCount: number;
  itemTypeIds: string[];
}

export interface MockItem {
  id: string;
  title: string;
  description: string;
  contentType: "TEXT" | "FILE" | "URL";
  content: string | null;
  url: string | null;
  language: string | null;
  isFavorite: boolean;
  isPinned: boolean;
  tags: string[];
  itemTypeId: string;
  collectionIds: string[];
  createdAt: string;
  updatedAt: string;
}

export const currentUser: MockUser = {
  id: "user_1",
  name: "John Doe",
  email: "john@example.com",
  image: null,
  isPro: true,
};

export const itemTypes: MockItemType[] = [
  { id: "type_snippet", name: "snippet", label: "Snippets", icon: "Code", color: "#3b82f6", isSystem: true, itemCount: 24 },
  { id: "type_prompt", name: "prompt", label: "Prompts", icon: "Sparkles", color: "#8b5cf6", isSystem: true, itemCount: 18 },
  { id: "type_command", name: "command", label: "Commands", icon: "Terminal", color: "#f97316", isSystem: true, itemCount: 15 },
  { id: "type_note", name: "note", label: "Notes", icon: "StickyNote", color: "#fde047", isSystem: true, itemCount: 12 },
  { id: "type_file", name: "file", label: "Files", icon: "File", color: "#6b7280", isSystem: true, itemCount: 5 },
  { id: "type_image", name: "image", label: "Images", icon: "Image", color: "#ec4899", isSystem: true, itemCount: 3 },
  { id: "type_link", name: "link", label: "Links", icon: "Link", color: "#10b981", isSystem: true, itemCount: 8 },
];

export const collections: MockCollection[] = [
  {
    id: "col_react",
    name: "React Patterns",
    description: "Common React patterns and hooks",
    isFavorite: true,
    itemCount: 12,
    itemTypeIds: ["type_snippet", "type_note", "type_link"],
  },
  {
    id: "col_python",
    name: "Python Snippets",
    description: "Useful Python code snippets",
    isFavorite: false,
    itemCount: 8,
    itemTypeIds: ["type_snippet", "type_note"],
  },
  {
    id: "col_context",
    name: "Context Files",
    description: "AI context files for projects",
    isFavorite: true,
    itemCount: 5,
    itemTypeIds: ["type_file", "type_note"],
  },
  {
    id: "col_interview",
    name: "Interview Prep",
    description: "Technical interview preparation",
    isFavorite: false,
    itemCount: 24,
    itemTypeIds: ["type_note", "type_snippet", "type_link", "type_prompt"],
  },
  {
    id: "col_git",
    name: "Git Commands",
    description: "Frequently used git commands",
    isFavorite: true,
    itemCount: 15,
    itemTypeIds: ["type_command", "type_note"],
  },
  {
    id: "col_ai",
    name: "AI Prompts",
    description: "Curated AI prompts for coding",
    isFavorite: false,
    itemCount: 18,
    itemTypeIds: ["type_prompt", "type_snippet", "type_note"],
  },
];

export const items: MockItem[] = [
  {
    id: "item_1",
    title: "useAuth Hook",
    description: "Custom authentication hook for React applications",
    contentType: "TEXT",
    content: `export function useAuth() {
  const { data: session, status } = useSession();
  return { user: session?.user, isLoading: status === "loading" };
}`,
    url: null,
    language: "typescript",
    isFavorite: true,
    isPinned: true,
    tags: ["react", "auth", "hooks"],
    itemTypeId: "type_snippet",
    collectionIds: ["col_react"],
    createdAt: "2026-01-15T10:00:00Z",
    updatedAt: "2026-01-15T10:00:00Z",
  },
  {
    id: "item_2",
    title: "API Error Handling Pattern",
    description: "Fetch wrapper with exponential backoff retry logic",
    contentType: "TEXT",
    content: `async function fetchWithRetry(url: string, retries = 3): Promise<Response> {
  for (let i = 0; i < retries; i++) {
    const res = await fetch(url);
    if (res.ok) return res;
    await new Promise((r) => setTimeout(r, 2 ** i * 1000));
  }
  throw new Error("Request failed");
}`,
    url: null,
    language: "typescript",
    isFavorite: false,
    isPinned: true,
    tags: ["api", "fetch", "error-handling"],
    itemTypeId: "type_snippet",
    collectionIds: ["col_react", "col_interview"],
    createdAt: "2026-01-12T10:00:00Z",
    updatedAt: "2026-01-12T10:00:00Z",
  },
  {
    id: "item_3",
    title: "Code Review Prompt",
    description: "Thorough code review focusing on bugs and readability",
    contentType: "TEXT",
    content: "Review the following code for bugs, security issues, and readability. Suggest concrete improvements.",
    url: null,
    language: null,
    isFavorite: true,
    isPinned: false,
    tags: ["ai", "code-review"],
    itemTypeId: "type_prompt",
    collectionIds: ["col_ai"],
    createdAt: "2026-01-10T10:00:00Z",
    updatedAt: "2026-01-10T10:00:00Z",
  },
  {
    id: "item_4",
    title: "Undo Last Commit",
    description: "Reset to the previous commit, discarding changes",
    contentType: "TEXT",
    content: "git reset --hard HEAD~1",
    url: null,
    language: "bash",
    isFavorite: false,
    isPinned: false,
    tags: ["git"],
    itemTypeId: "type_command",
    collectionIds: ["col_git"],
    createdAt: "2026-01-09T10:00:00Z",
    updatedAt: "2026-01-09T10:00:00Z",
  },
  {
    id: "item_5",
    title: "List Comprehension Examples",
    description: "Common Python list comprehension patterns",
    contentType: "TEXT",
    content: "squares = [x ** 2 for x in range(10) if x % 2 == 0]",
    url: null,
    language: "python",
    isFavorite: false,
    isPinned: false,
    tags: ["python", "lists"],
    itemTypeId: "type_snippet",
    collectionIds: ["col_python"],
    createdAt: "2026-01-08T10:00:00Z",
    updatedAt: "2026-01-08T10:00:00Z",
  },
  {
    id: "item_6",
    title: "Big O Cheat Sheet",
    description: "Time complexity notes for common data structures",
    contentType: "TEXT",
    content: "# Big O\n\n- Array access: O(1)\n- Hash map lookup: O(1) average\n- Binary search: O(log n)",
    url: null,
    language: null,
    isFavorite: false,
    isPinned: false,
    tags: ["algorithms", "interview"],
    itemTypeId: "type_note",
    collectionIds: ["col_interview"],
    createdAt: "2026-01-07T10:00:00Z",
    updatedAt: "2026-01-07T10:00:00Z",
  },
  {
    id: "item_7",
    title: "Project CLAUDE.md",
    description: "AI context file template for new projects",
    contentType: "FILE",
    content: null,
    url: null,
    language: null,
    isFavorite: false,
    isPinned: false,
    tags: ["ai", "context"],
    itemTypeId: "type_file",
    collectionIds: ["col_context"],
    createdAt: "2026-01-06T10:00:00Z",
    updatedAt: "2026-01-06T10:00:00Z",
  },
  {
    id: "item_8",
    title: "React Docs",
    description: "Official React documentation",
    contentType: "URL",
    content: null,
    url: "https://react.dev",
    language: null,
    isFavorite: false,
    isPinned: false,
    tags: ["react", "docs"],
    itemTypeId: "type_link",
    collectionIds: ["col_react"],
    createdAt: "2026-01-05T10:00:00Z",
    updatedAt: "2026-01-05T10:00:00Z",
  },
];
