const list = document.querySelector(".list");
const btn = document.querySelector("button");
const form = document.querySelector("form");
const loading = document.querySelector(".lds-roller");
const descInput = document.querySelector(".desc");
const nameInput = document.querySelector(".name");

loading.classList.add("active");

async function getData() {
  try {
    const response = await fetch("https://northwind.vercel.app/api/categories");
    const jsonData = await response.json();

    jsonData
      .sort((a, b) => a.id - b.id)
      .forEach((d) => {
        list.innerHTML += `
                <div class="card" style="width: 18rem;">
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">Id: ${d.id}</li>
                    <li class="list-group-item">Description: ${d.description}</li>
                    <li class="list-group-item">Name: ${d.name}</li>
                    </ul>
                    <button class="btn btn-danger w-50 m-2" onClick="deleteData(${d.id})">Delete</button>
                </div>
        `;
      });

    // const results = fetch("https://northwind.vercel.app/api/categories");

    // results
    //   .then((res) => res.json())
    //   .then((data) => {
    //     data
    //       .sort((a, b) => a.id - b.id)
    //       .forEach((d) => {
    //         list.innerHTML += `
    //             <div class="card" style="width: 18rem;">
    //                 <ul class="list-group list-group-flush">
    //                 <li class="list-group-item">Id: ${d.id}</li>
    //                 <li class="list-group-item">Description: ${d.description}</li>
    //                 <li class="list-group-item">Name: ${d.name}</li>
    //                 </ul>
    //                 <button class="btn btn-danger w-50 m-2" onClick="deleteData(${d.id})">Delete</button>
    //             </div>
    //     `;
    //       });
    //   });
  } catch (err) {
    console.log(err);
  } finally {
    loading.classList.remove("active");
  }
}

getData();

async function PostData() {
  const res = await fetch("https://northwind.vercel.app/api/categories", {
    method: "post",

    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({
      description: descInput.value,
      name: nameInput.value,
    }),
  });

  list.innerHTML = "";
  getData();

  console.log(res);
  return res.json();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  PostData();
});

async function deleteData(clicked_id) {
  await fetch(`https://northwind.vercel.app/api/categories/${clicked_id}`, {
    method: "delete",
  });

  list.innerHTML = "";
  getData();

  console.log(clicked_id);
}
