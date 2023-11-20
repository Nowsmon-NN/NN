<script>
    // 模拟最新文章的数据
    const latestArticlesData = [
      {
        title: "Article 1",
        thumbnail: "article1-thumbnail.jpg",
        introduction: "Introduction text of Article 1 (less than 200 words)...",
        link: "article1.html"
      },
      {
        title: "Article 2",
        thumbnail: "article2-thumbnail.jpg",
        introduction: "Introduction text of Article 2 (less than 200 words)...",
        link: "article2.html"
      }
    ];

    // 模拟最新视频的数据
    const latestVideosData = [
      {
        title: "Video 1",
        thumbnail: "video1-thumbnail.jpg",
        introduction: "Introduction text of Video 1 (less than 200 words)...",
        link: "video1.html"
      },
      {
        title: "Video 2",
        thumbnail: "video2-thumbnail.jpg",
        introduction: "Introduction text of Video 2 (less than 200 words)...",
        link: "video2.html"
      }
    ];

    // 模拟最新想法的数据
    const latestIdeasData = [
      {
        title: "Idea 1",
        thumbnail: "idea1-thumbnail.jpg",
        introduction: "Introduction text of Idea 1 (less than 200 words)...",
        link: "idea1.html"
      },
      {
        title: "Idea 2",
        thumbnail: "idea2-thumbnail.jpg",
        introduction: "Introduction text of Idea 2 (less than 200 words)...",
        link: "idea2.html"
      }
    ];

    // 模拟关于我的数据
    const aboutMeData = {
      title: "About Me",
      thumbnail: "about-me-thumbnail.jpg",
      introduction: "Introduction text about me (less than 200 words)...",
      link: "about.html"
    };

    // 获取最新文章容器的 DOM 元素
    const latestArticlesContainer = document.getElementById("latestArticles");

    // 动态生成最新文章的内容
    latestArticlesData.forEach(article => {
      const articleElement = document.createElement("div");
      articleElement.classList.add("item");

      const thumbnailElement = document.createElement("img");
      thumbnailElement.src = article.thumbnail;
      articleElement.appendChild(thumbnailElement);

      const titleElement = document.createElement("h3");
      titleElement.textContent = article.title;
      articleElement.appendChild(titleElement);

      const introductionElement = document.createElement("p");
      introductionElement.textContent = article.introduction;
      articleElement.appendChild(introductionElement);

      const linkElement = document.createElement("a");
      linkElement.classList.add("button");
      linkElement.href = article.link;
      linkElement.textContent = "Read More";
      articleElement.appendChild(linkElement);

      latestArticlesContainer.appendChild(articleElement);
    });

    // 获取最新视频容器的 DOM 元素
    const latestVideosContainer = document.getElementById("latestVideos");

    // 动态生成最新视频的内容
    latestVideosData.forEach(video => {
      const videoElement = document.createElement("div");
      videoElement.classList.add("item");

      const thumbnailElement = document.createElement("img");
      thumbnailElement.src = video.thumbnail;
      videoElement.appendChild(thumbnailElement);

      const titleElement = document.createElement("h3");
      titleElement.textContent = video.title;
      videoElement.appendChild(titleElement);

      const introductionElement = document.createElement("p");
      introductionElement.textContent = video.introduction;
      videoElement.appendChild(introductionElement);

      const linkElement = document.createElement("a");
      linkElement.classList.add("button");
      linkElement.href = video.link;
      linkElement.textContent = "Watch More";
      videoElement.appendChild(linkElement);

      latestVideosContainer.appendChild(videoElement);
    });

    // 获取最新想法容器的 DOM 元素
    const latestIdeasContainer = document.getElementById("latestIdeas");

    // 动态生成最新想法的内容
    latestIdeasData.forEach(idea => {
      const ideaElement = document.createElement("div");
      ideaElement.classList.add("item");

      const thumbnailElement = document.createElement("img");
      thumbnailElement.src = idea.thumbnail;
      ideaElement.appendChild(thumbnailElement);

      const titleElement = document.createElement("h3");
      titleElement.textContent = idea.title;
      ideaElement.appendChild(titleElement);

      const introductionElement = document.createElement("p");
      introductionElement.textContent = idea.introduction;
      ideaElement.appendChild(introductionElement);

      const linkElement = document.createElement("a");
      linkElement.classList.add("button");
      linkElement.href = idea.link;
      linkElement.textContent = "Explore More";
      ideaElement.appendChild(linkElement);

      latestIdeasContainer.appendChild(ideaElement);
    });

    // 获取关于我的容器的 DOM 元素
    const aboutMeContainer = document.getElementById("aboutMe");

    // 动态生成关于我的内容
    const aboutMeElement = document.createElement("div");
    aboutMeElement.classList.add("item");

    const thumbnailElement = document.createElement("img");
    thumbnailElement.src = aboutMeData.thumbnail;
    aboutMeElement.appendChild(thumbnailElement);

    const titleElement = document.createElement("h3");
    titleElement.textContent = aboutMeData.title;
    aboutMeElement.appendChild(titleElement);

    const introductionElement = document.createElement("p");
    introductionElement.textContent = aboutMeData.introduction;
    aboutMeElement.appendChild(introductionElement);

    const linkElement = document.createElement("a");
    linkElement.classList.add("button");
    linkElement.href = aboutMeData.link;
    linkElement.textContent = "Learn More";
    aboutMeElement.appendChild(linkElement);

    aboutMeContainer.appendChild(aboutMeElement);
  </script>
