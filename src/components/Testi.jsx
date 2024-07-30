"use cleint";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import Ulasan from "./Ulasan";
import useUlasan from "../hooks/useUlasan";

export default function Testi() {
  const { ulasans, loading, error } = useUlasan();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading menus: {error.message}</p>;

  return (
    <div className="relative ">
      <div className="grid grid-cols-12 gap-5 md:gap-0 py-20 md:py-36 lg:mx-16 mx-6 md:mx-6 sm:mx-10">
        <div className="col-span-12 text-center gap-2">
          <h1 className="text-3xl md:text-5xl font-bold text-[#A98A55]">
            Ulasan Pelanggan
          </h1>
          <p className="mt-4 mb-10 text-[#4F6C51]">
            Bagaimana pendapatan mereka?
          </p>
        </div>
        <div className="col-span-12 flex gap-5 flex-col md:flex-row mb-10">
          {ulasans.map((ulasanItem, key) => (
            <Card key={key} className="py-4 w-full">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                <FaCircleUser className="text-7xl text-gray-500" />
              </CardHeader>
              <CardBody className="overflow-visible flex items-center py-2">
                <h4 className="font-bold text-large">{ulasanItem.name}</h4>
                <p className="text-sm text-gray-400 text-center font-light">
                  {ulasanItem.deskripsi}
                </p>
              </CardBody>
              <small className="text-default-500 absolute left-5">
                {new Date(ulasanItem.created_at).toLocaleDateString()}
              </small>
            </Card>
          ))}
        </div>
        <Ulasan />
      </div>
    </div>
  );
}
