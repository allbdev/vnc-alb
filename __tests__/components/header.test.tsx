import React from "react";
import { expect, test, vitest } from "vitest";
import { render, screen } from "@testing-library/react";
import { Header } from "@/components/Header";
import { Render } from "../utils/render";

test("Header", () => {
  vitest.mock("next/headers", () => {
    return {
      cookies: () => {
        return {
          get: vitest.fn(),
          set: vitest.fn(),
        };
      },
    };
  });

  render(
    <Render>
      <Header />
    </Render>,
  );
  expect(screen.getAllByTestId("based-span").length).toBe(2);
  expect(screen.getAllByTestId("based-span")[0]).toBeDefined();
});
