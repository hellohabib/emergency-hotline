(1) What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById
কোন HTML এলিমেন্টের id দিয়ে জাভাস্ক্রিপ্টে ওই HTML ইলিমেন্ট কে সিলেক্ট করে কোন অপারেশন চালানোর জন্য getElementById ব্যবহার করা হয়।
এটি শুধু একটাই HTML এলিমেন্টের রিটার্ন করে।

getElementsByClassName
কোন HTML এলিমেন্ট বা এলিমেন্ট সমূহের class নেম দিয়ে জাভাস্ক্রিপ্টে ওই ইলিমেন্ট কে বা এলিমেন্ট সমূহ কে সিলেক্ট করে কোন অপারেশন চালানোর জন্য getElementsByClassName ব্যবহার করা হয়।
এটি class name এর উপর ভিত্তি করে এক বা একাধিক HTML এলিমেন্ট রিটার্ন করে।

querySelector
CSS Selector দিয়ে জাভাস্ক্রিপ্টে কোন HTML ইলিমেন্ট কে সিলেক্ট করে এর উপর কোন অপারেশন চালানোর জন্য querySelector ব্যবহার করা হয়।
এটি শুধু একটাই HTML এলিমেন্টের রিটার্ন করে। CSS Selector এর উপর ভিত্তি করে প্রাপ্ত ইলিমেন্ট বা ইলিমেন্ট সমুহের মধ্যে শুধুমাত্র প্রথম ইলিমেন্ট কে রিটার্ন করে।

querySelectorAll
CSS Selector দিয়ে জাভাস্ক্রিপ্টে releavent সকল HTML ইলিমেন্ট সমূহ কে সিলেক্ট করে এদের উপর কোন অপারেশন চালানোর জন্য querySelectorAll ব্যবহার করা হয়।
এটি এক বা একাধিক HTML এলিমেন্টের রিটার্ন করে। CSS Selector এর উপর ভিত্তি করে প্রাপ্ত সকল ইলিমেন্ট সমুহদের কে রিটার্ন করে।

 

(2) How do you create and insert a new element into the DOM?

document.createElement() ফাংশন দিয়ে নতুন ইলিমেন্ট তৈরী করা হয়।
যেমন একটা নতুন div তৈরী করার জন্য নিচের কোড লিখতে হবেঃ
const newDiv = document.createElement("div");

appendChild() ফাংশন দিয়ে নতুন ইলিমেন্ট যোগ করা হয়।
যেমনঃ নতুন div টি container নামক প্যারেন্ট div এ যোগ করার জন নিচের কোড লিখতে হবেdocument.getElementById("container").appendChild(newDiv);

(3) What is Event Bubbling and how does it work?
child element থেকে তার parent element, এর পর তার parent element, এর পর তার parent element এভাবে যেতে যেতে একদম HTML body tag পর্যন্ত যাওয়া কে event bubbling বলে।

