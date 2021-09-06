
// ১. setTimeout এর ভিতরে একটা কিছু কনসোল লগ করবে যেটা সাড়ে তিন সেকেন্ড পরে আউটপুট দেখাবে। ,

const delayedOutput = () => {
    console.log("This output is shown 3.5 seconds delayed after clicking the button!");
}
document.getElementById("delayed-output").addEventListener("click", () => {
    setTimeout(delayedOutput, 3500);
});

// ২. prompt দিয়ে ইউজারের কাছ থেকে একটা সংখ্যা নাও। সেটার সাথে ২০০যোগ করো। যোগ করতে গেলে parse করা লাগলে সেটা করো। তারপর সেই রেজাল্টকে alert দিয়ে আউটপুট দেখাও 

document.getElementById("user-input").addEventListener("click", () => {
    const userInput = prompt("Input an integer number, please...");
    const requiredOutput = parseInt(userInput) + 200;

    if (isNaN(requiredOutput)) {
        alert("Get the heck out of here. I told you to input an integer number.");
    }
    else {
        alert(requiredOutput);
    }
});
// ৩. ব্রাউজারে একটা confirm করে জিজ্ঞেস করো তুমি কি তোমার ওয়েবসাইট এর লোকেশন দেখতে চাও। যদি বলে দেখতে চাই তাহলে সেই ওয়েবসাইট এর লোকেশন এর href জিনিসটা কনসোল লগ করে দেখাও 

document.getElementById("ensure").addEventListener("click", () => {
    const ensure = confirm("Wanna see your browser location of this website???");
    if (ensure) {
        console.log(document.location.href);
    }
});