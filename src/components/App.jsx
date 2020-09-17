import React from "react";
import Header from "./Header";
import Item from "./Item";
import emojipedia from "../emojipedia";

// function createCard(emojiData) {
//   return (
//     <Item
//       key={emojiData.id}
//       name={emojiData.name}
//       emoji={emojiData.emoji}
//       meaning={emojiData.meaning}
//     />
//   );
// }

function App() {
  return (
    <div>
      <Header />

      <dl className="dictionary">
        {emojipedia.map((emojiData) => {
          return (
            <Item
              key={emojiData.id}
              name={emojiData.name}
              emoji={emojiData.emoji}
              meaning={emojiData.meaning}
            />
          );
        })}
      </dl>
    </div>
  );
}

export default App;
