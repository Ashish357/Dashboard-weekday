import { createAsyncThunk } from '@reduxjs/toolkit';
import React from 'react'

export const getAllJobs = createAsyncThunk('jobs/getAllJobs', async (pageNumber) => {
    try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify({
            "limit": 9,
            "offset": pageNumber
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw
        };
        const data = await fetch(
            "https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions
        );
        const json = await data.json();
        // console.log(json);
        return json;
    } catch (error) {
        console.log(error)
    }
})