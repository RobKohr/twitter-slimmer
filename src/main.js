$(function () {
  setInterval(() => {
    $('article').each(function (index) {
      const text = $(this).text().substr(0, 100);
      let hide = false;
      const matchList = ['Retweeted', ' liked'];
      matchList.forEach((val) => {
        if (text.includes(val)) {
          hide = true;
        }
      });
      if (hide) {
        $(this).parent().remove();
      }
    });
  }, 100);
});
