const heading = React.createElement("h1", {}, "hellow world from react");
const root1 = ReactDom.CreateRoot(document.getElementById("root"));
root.render(heading);
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am in h1 tag"),
    React.createElement("h2", {}, "i am in h2 tag"),
  ])
);
const root = ReactDom.CreateRoot(document.getElementById("root"));
root.render(parent);