const MEMBERS_DATA = [
  {
    id: "m1",
    name: "Matt",
    age: "26",
    job: "💻 Developer",
    bio: "Sucker for nature and cats",
    avatar: "images/photo1.jpeg",
  },

  {
    id: "m2",
    name: "Emily",
    age: "29",
    job: "🐶 Nurse",
    bio: "Always keep chasing your dreams... :)",
    avatar: "images/photo2.jpeg",
  },

  {
    id: "m3",
    name: "Kim",
    age: "31",
    job: "💎 Jeweler",
    bio: "My favorite artist is ginger and sings about the sun",
    avatar: "images/photo3.jpeg",
  },

  {
    id: "m4",
    name: "John",
    age: "23",
    job: "🔩 Software engineer",
    bio: "Everyone can learn anything they want!",
    avatar: "images/photo4.jpeg",
  },

  {
    id: "m5",
    name: "Kendrick",
    age: "25",
    job: "❌ Unemployed",
    bio: "I gamble on the daily while my friends are working 9-5..",
    avatar: "images/photo5.jpeg",
  },
];

export function showMembers(){
    return MEMBERS_DATA;
}