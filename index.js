let output = null;
const list = document.querySelector("#output");

const getData = async () => {
  try {
    const data = await fetch("https://devtest.equisolve-dev.com/");
    const dataJSON = await data.json();
    console.log(dataJSON);
    
    const dataCopy = [...dataJSON]
      .sort((a, b) => new Date(a.published_at) - new Date(b.published_at))
      .reverse();
    console.log(dataCopy);
    
    output = dataCopy.map(
      (item) =>
      `<li><span class='li-heading'>Title:</span>
      ${item.title}</li>
      <li> <span class='li-heading'>Date Published:</span> ${item.published_at}</li>`
    );
    list.innerHTML = output;
     } catch(error) {
     console.error(`Unable to fetch the data: ${error}`);
}
};
getData();
