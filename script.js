document.getElementById("post").addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const comment = document.getElementById("comment").value;

  if (!name || !email || !comment) {
    alert("Fill The Box.");
  } else {
    const newComment = document.createElement("div");
    newComment.innerHTML = `
            <div class=" px-3 py-4 rounded-md relative bg-gray-100 shadow-sm">
                <h2 class="text-[18px] font-semibold text-gray-600">${name}</h2>
                <p class="opacity-60">${comment}</p>
                <h3 class="text-green-800 mt-3">${email}</h3>
                <i id="delete" class="fa-solid fa-trash absolute right-3 bottom-3 cursor-pointer text-red-600"></i>
            </div>
    `;

    document.getElementById("parent").appendChild(newComment);
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("comment").value = "";

    newComment
      .querySelector(".fa-trash")
      .addEventListener("click", function () {
        newComment.remove();
      });
  }
});
