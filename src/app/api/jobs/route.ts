import { getDataFromToken } from "@/app/helper/getDataFromToken";
import { getRoleFromToken } from "@/app/helper/getRoleFromToken";
import {connect} from "@/dbConfig/dbConfig";
import Job from "@/models/jobModel";
import { NextRequest, NextResponse } from "next/server";

connect()

export async function GET(request:NextRequest){
    try {
        const jobs = await Job.find();
        return NextResponse.json({
            message: "Jobs found",
            data: jobs
        })
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400})
        
    }
}


export async function POST(request: NextRequest){
    // Defines an asynchronous POST request handler.
        try {
            const userId = await getDataFromToken(request);
            const role = await getRoleFromToken(request);
         

            const reqBody = await request.json()
            const {title,companyName,description,type, pay,category,address} = reqBody
    
            const newJob = new Job({
                userId,
                title,
                companyName,
                description,
                type, 
                pay,
                category,
                address
            })
    
            console.log(newJob);
    // Saves the new user to the database.
            const savedJob = await newJob.save()
    
            
            return NextResponse.json({
                message: "Job created successfully",
                success: true,
                savedJob
            })
    
    
        } catch (error: any) {
            return NextResponse.json({error: error.message}, {status: 500})
    
        }
    }