import { describe, expect, it } from "@jest/globals";
import request from "supertest";
import { app } from "../index";

describe("POST /subtract", () => {
  it("should return the subtract of two numbers", async () => {
    const res = await request(app).post("/subtract").send({
      a: 2,
      b: 1,
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe(1);
  });

  it("should return the subtract of two negative numbers", async () => {
    const res = await request(app).post("/subtract").send({
      a: -1,
      b: -2,
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe(1);
  });

  it("should return the subtract of two zero numbers", async () => {
    const res = await request(app).post("/subtract").send({
      a: 0,
      b: 0,
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe(0);
  });
});
