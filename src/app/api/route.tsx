import { NextResponse } from "next/server";
import React from "react";
export const GET = () => {
    return NextResponse.json({
        message: "Welcome to the Quote Generator API",
        status: "success",
    });
};
