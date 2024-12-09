import { describe, expect, it } from "@jest/globals";
import request from "supertest";
import { app } from "../index";

describe("POST /sum", () => {
  it("should return the multiply of two numbers", async () => {
    const res = await request(app).post("/multiply").send({
      a: 1,
      b: 2,
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe(2);
  });

  it("should return the multiply of two negative numbers", async () => {
    const res = await request(app).post("/multiply").send({
      a: -1,
      b: -2,
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe(2);
  });

  it("should return the multiply of two zero numbers", async () => {
    const res = await request(app).post("/multiply").send({
      a: 0,
      b: 0,
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe(0);
  });
});
