"use client";
import { useState } from 'react';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Link from 'next/link';
import SpkBadge from '@/shared/@spk-reusable-components/uielements/spk-badge';

interface ChatType {
    id: number;
    src: string;
    heading: string;
    description: string;
    time: string;
    badge: any;
    status: string;
    Icon: boolean;
    activeclass: string;
}

const data = <SpkBadge variant="primarytint2color" customClass="!rounded-full float-end">3</SpkBadge>

export const Chat1: ChatType[] = [
    { id: 1, src: "../../assets/images/faces/5.jpg", heading: "Rashid Khan", description: "Hey!! you are there? 😊", time: "11:12PM", badge: data, status: "online", Icon: false, activeclass: "" },
    { id: 2, src: "../../assets/images/faces/2.jpg", heading: "Jamison Jen", description: "Typing...", time: "06:52AM", badge: "", status: "online", Icon: false, activeclass: "" },
    { id: 3, src: "../../assets/images/faces/10.jpg", heading: "Andy Max", description: "Great! I am happy to here this from you. ☕", time: "10:15AM", badge: "", status: "online", Icon: true, activeclass: "" },
    { id: 4, src: "../../assets/images/faces/6.jpg", heading: "Kerina Cherish", description: "Looking forward about the matter", time: "03:15PM", badge: "", status: "online", Icon: true, activeclass: "" },

]

interface ChatType1 {
    id: number;
    src: string;
    heading: string;
    description: string;
    time: string;
    badge: any;
    status: string;
}

export const Chat2: ChatType1[] = [
    { id: 1, src: "../../assets/images/faces/11.jpg", heading: "Rony Erick", description: "You should come definately🎬", time: "04:13PM", badge: "", status: "offline" },
    { id: 2, src: "../../assets/images/faces/3.jpg", heading: "Kenath kin", description: "Did you remember the date", time: "12:46AM", badge: "", status: "offline" },
    { id: 3, src: "../../assets/images/faces/13.jpg", heading: "Thomas Lie", description: "Hi, Thank you for everything", time: "07:30PM", badge: "", status: "offline" },
    { id: 4, src: "../../assets/images/faces/4.jpg", heading: "Peter Stark", description: "Going to Australia!", time: "01:18PM", badge: "", status: "offline" },
    { id: 5, src: "../../assets/images/faces/13.jpg", heading: "Monte Christ", description: "Little Busy 🍕", time: "08:07PM", badge: "", status: "offline" },
    { id: 6, src: "../../assets/images/faces/15.jpg", heading: "Regina Mos", description: "Have a Question?", time: "09:19PM", badge: "", status: "offline" },
]
interface ChatType2 {
    id: number;
    src: string;
    heading: string;
    description: string;
    time: string;
    badge: any;
    status: string;
    class: string;
}

const data1 = <SpkBadge variant="primarytint3color" customClass="!rounded-full float-end">2</SpkBadge>

export const Chat3: ChatType2[] = [
    { id: 1, src: "../../assets/images/faces/17.jpg", heading: "Huge Rocks 😍", description: "Mony Typing...", time: "12:24PM", badge: data1, status: "online", class: "chat-msg-typing" },
    { id: 2, src: "../../assets/images/faces/18.jpg", heading: "Creative Group", description: "Have any updates today?", time: "06:16AM", badge: "", status: "online", class: "" },
    { id: 3, src: "../../assets/images/faces/19.jpg", heading: "Anyside Spriritual 😎", description: "Samantha, Adam, Jessica, Emily, Alex", time: "2 days ago", badge: "", status: "offline", class: "" },
    { id: 4, src: "../../assets/images/faces/20.jpg", heading: "Fun Time", description: "Elsa,Henry,Susan, Emily, Ashlin", time: "3 days ago", badge: "", status: "offline", class: "" },
    { id: 5, src: "../../assets/images/faces/21.jpg", heading: "Latest News", description: "Emanuel, Rony, Alina, Lilly, Rush", time: "10 days ago", badge: "", status: "offline", class: "" },

]

