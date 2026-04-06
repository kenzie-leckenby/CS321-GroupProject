"use client";

import Button from '@mui/material/Button';
import Link from 'next/link';

interface ButtonParams {
  href: string;     // What page the button links to
  label: string;    // What the button says
}

export default function PageButton({ href, label }: ButtonParams) {
  return (
    <Button variant="contained" component={Link} href={href} sx={{ marginRight: 4}}>
      {label}
    </Button>
  );
}