import { promises as fs } from "fs";
import { constants } from 'fs';
import path from 'path';
import fetch from "node-fetch";
import crypto from 'crypto'
import { writeFileSync } from 'fs';

const downloadImage = async (url: string, path: string) => {
  const response = await fetch(url);
  const blob = await response.blob();
  const arrayBuffer = await blob.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  await fs.writeFile(path, buffer);
}

/* await downloadImage("https://randomstupidwebsite.com/randomstupidimage", "./images/randomstupidimage.png"); */