document.addEventListener("DOMContentLoaded", () => {
  const switchers = document.querySelectorAll(".switch");
  const tabs = document.querySelectorAll(".tab");
  const tabsArray = Array.from(tabs);
  const switceshArray = Array.from(switchers);

  switchers.forEach((s) => {
    s.addEventListener("click", ({ target }) => {
      const currentTab = tabsArray.find((t) => t.id === target.id + "-tab");

      if (currentTab.classList.contains("tab-show")) {
        return;
      }

      switchers.forEach((s) => {
        if (s.classList.contains("switch-active")) {
          s.classList.remove("switch-active");
          s.classList.add("switch-hover");
        }
      });

      for (const t of tabsArray) {
        if (!t.classList.contains("d-none")) {
          t.classList.remove("tab-show");

          setTimeout(() => {
            t.classList.add("d-none");
          }, 500);

          // t.addEventListener(
          //   "transitionend",
          //   () => {
          //     t.classList.add("d-none");
          //   },
          //   { once: true }
          // );
        }
      }

      // tabsArray.forEach((t) => {

      // });

      target.classList.remove("switch-hover");
      target.classList.add("switch-active");

      setTimeout(() => {
        currentTab.classList.remove("d-none");
        currentTab.classList.add("tab-show");
      }, 500);
    });
  });
});
