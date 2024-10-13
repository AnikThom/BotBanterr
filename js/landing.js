const $ = (x) => document.querySelector(x);
const $$ = (x) => document.querySelectorAll(x);
const esc = (x) => {
    const txt = document.createTextNode(x);
    const p = document.createElement("p");
    p.appendChild(txt);
    return p.innerHTML;
};
let base = Math.floor(Math.random() * 50 + 30);
const noise = Math.floor(Math.random() * 10 - 5);
let allTags = [];






function configureTags() {
    const $input = $("#interest-container input");
    const $tags = $("#tag-container");
    const $videoBtn = $("#video-btn");

    $input.addEventListener("keydown", (e) => {
        if (e.key !== "Enter" && e.key !== ",") return;

        const value = $input.value.trim();
        if (!value) return;

        allTags.push(value);
        const tag = document.createElement("div");
        tag.id = "tag";
        tag.innerHTML = `<p><span>${esc(value)}</span> ×</p>`;
        tag.style = "cursor: pointer";

        tag.onclick = () => {
            tag.remove();
            allTags = allTags.filter((x) => x !== tag.getElementsByTagName("span")[0].innerText);

        };

        $input.value = "";

        e.preventDefault();
    });


    $videoBtn.addEventListener("click", () => {
        window.location.href = "video.html";
    });
}



configureTags();
window.addEventListener("load", initTagsFromURL);
await getPeopleOnline();