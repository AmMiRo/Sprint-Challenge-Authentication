const request = require("supertest");
const db = require("../database/dbConfig.js");
const server = require("../api/server.js");

const testUser = {
  username: "test1",
  password: "testpass"
};

const loginUser = {
  username: testUser.username,
  password: testUser.password
};

describe("server.js", () => {
  describe("POST /api/auth/register", () => {
    it("should return 201 status, return JSON, return user with correct username", async () => {
      const res = await request(server)
        .post("/api/auth/register")
        .send(testUser);
      expect(res.status).toBe(201);
      expect(res.type).toMatch(/json/i);
      expect(res.body.username).toBe(testUser.username);
    });
  });
  describe("POST /api/auth/login", () => {
    it("should return 200 status, return JSON, return user with correct username", async () => {
      const res = await request(server)
        .post("/api/auth/login")
        .send(loginUser);
      expect(res.status).toBe(200);
      expect(res.type).toMatch(/json/i);
      expect(res.body.user.username).toBe(testUser.username);
    });
  });
  describe("GET /api/jokes", () => {
    it("should return 200 status, return JSON", async () => {
      const loginres = await request(server)
        .post("/api/auth/login")
        .send({ username: "amos", password: "rose" });
      const res = await request(server)
        .get("/api/jokes")
        .set({ Authorization: loginres.body.token });
      expect(res.status).toBe(200);
      expect(res.type).toMatch(/json/i);
    });
  });
});
