import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: 1,
    title:
      "Disney Eats: Asian American and Pacific Islander Heritage Month Foodie Guide 2024 ",
    content:
      "The talented culinary teams have drawn inspiration from various cultures and cuisines, and infused some of their own, personal flair into these dishes. With new and limited-time treats, like the Yuzu Lemonade Coffee at Aunt Cass Café and the Strawberry Boba Milk Tea Petit Cake from Amorette’s Patisserie, as well as items you can indulge in all year long, such as Beef Birria Ramen from Lucky Fortune Cookery, there are plenty of ways to celebrate these cultures through flavor, anytime at Disney Parks.  ",
    author: "Thamarai",
    date: sub(new Date(), { minutes: 15 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: 2,
    title: "5 Stunning Pixar Fest Wallpapers with Favorite Pixar Characters",
    content:
      "Pixar Fest is an exciting celebration featuring characters and stories from Pixar Animation Studios, happening April 26 – Aug. 4, 2024 at Disneyland Resort! It’s filled with fun Pixar-themed entertainment, food, and merchandise. This year, you’ll get to see more than two dozen Pixar characters in the new “Better Together: A Pixar Pals Celebration!” parade at Disney California Adventure park, new scenes added to the “Together Forever – A Pixar Nighttime Spectacular” at Disneyland park, and Pixar character encounters throughout both parks!",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    author: "Thamarai",
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: 3,
    title: "Wildly Popular Custom Character Headbands Coming to Disneyland",
    content:
      "s many of you know, Pixar Fest is returning to Disneyland Resort from April 26-Aug. 4, 2024.  And if you’re a fan of the beloved characters and stories from Pixar Animation Studios (like us), then Buzz Lightyear, Alien and even Lots-o-Huggin’ Bear will be perfect picks for your future headband, especially during this year’s Pixar Fest celebration of friendship and beyond.",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    author: "Thamarai",
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];
export const PostSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, author) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            author,
            date: sub(new Date(), { minutes: 0 }).toISOString(),
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((data) => data.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});

export default PostSlice.reducer;
export const { postAdded, reactionAdded } = PostSlice.actions;
export const SelectAllPost = (state) => state.posts;
