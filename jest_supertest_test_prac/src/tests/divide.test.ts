import { describe, expect, it } from "@jest/globals";
import request from "supertest";
import { app } from "../index";

describe("POST /sum", () => {
  it("should return the divide of two numbers", async () => {
    const res = await request(app).post("/divide").send({
      a: 2,
      b: 1,
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe(2);
  });

  it("should return the divide of two negative numbers", async () => {
    const res = await request(app).post("/divide").send({
      a: -2,
      b: -1,
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe(2);
  });
});
