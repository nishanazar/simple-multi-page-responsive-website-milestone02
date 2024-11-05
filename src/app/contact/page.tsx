import { MdSupportAgent } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
 
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function Contact(){
    return (
      <>
      <div className="lg:ml-[70px] ml-[30px]">
      <h4 className="scroll-m-20 pb-[20px]   mt-[80px] text-3xl font-semibold tracking-tight">Contact My Resturant</h4>
      <p className="text-[15px] lg:text-[17px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dicta in, facilis magnam quos est eos ipsam ex obcaecati veritatis itaque illum vero molestiae hic aliquam a laboriosam quia! Fugit?</p></div>

<div className="lg:m-16 m-8 lg:w-[600px] w-[300px] " >
  <Table >
  <TableHeader >
    <TableRow>
    <TableCell className="bg-black text-white">Contact Details</TableCell>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>
      <MdSupportAgent className="text-[30px] text-red-500 pt-1 flex flex-col" />
      1234567890
      </TableCell>
      </TableRow>
    <TableRow>
      <TableCell>
        <MdEmail  className="text-[30px] text-blue-600 pt-1 flex flex-col" />
        helpline@.com
        </TableCell>
        </TableRow>
        <TableRow>
      <TableCell>
        <IoCall  className="text-[30px] text-green-700 pt-1 flex flex-col" />
        031-333-876
        </TableCell>
        </TableRow>
  </TableBody>
</Table>

</div>
      
      </>
    )
  }
  