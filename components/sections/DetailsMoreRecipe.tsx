"use client";
import React, { useState } from "react";
import { Images, Meal, Time } from "../Collections";
import { Button } from "../ui/button";
import Link from "next/link";
import { recipe1 } from "./MoreRecipes";

interface Recipe {
  id: number;
  favorite: boolean;
  src: string;
  text1: string;
  text2: string;
  meal: string;
  detailsHeading: string;
}

const DetailsMoreRecipes = () => {
  const [recipes, setRecipes] = useState(recipe1);

  const toggleLike = (id: number) => {
    setRecipes((prevRecipes: Recipe[]) =>
      prevRecipes.map((recipe, i) =>
        i === id ? { ...recipe, favorite: !recipe.favorite } : recipe
      )
    );
  };

  return (
    <section className="px-[118px] flex flex-col gap-12">
      <h1 className="text-[#000000] text-center text-5xl font-semibold">
        You may like these recipes too
      </h1>

      <div className="grid grid-cols-4 gap-8">
        {recipes.slice(0, 4).map((r, index) => {
          return (
            <Link
              href={`/details/${r.id}`}
              key={r.id}
              className=" flex justify-center gap-6  pb-8 rounded-b-[24px] relative"
            >
              <div className="flex flex-col gap-6">
                {" "}
                <Images
                  src={r.src}
                  className="h-[258px]  rounded-[28px] w-full"
                  alt={"burger"}
                />
                <p className="font-semibold text-lg text-[#000000]">
                  {r.text1}
                  <br />
                  {r.text2}
                </p>
                <div className="flex gap-8">
                  <Time time={"30"} />
                  <Meal meal={r.meal || "Meal"} />
                </div>
              </div>
              <Button
                onClick={() => toggleLike(index)}
                className="bg-transparent absolute right-2 top-6"
              >
                <div className="h-10 w-10 bg-[#ffffff] rounded-full  flex justify-center items-center">
                  <Images
                    src={r.favorite ? "/redlove.svg" : "/love.svg"}
                    className={" h-4 w-4"}
                    alt={"favorite"}
                  />
                </div>
              </Button>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default DetailsMoreRecipes;