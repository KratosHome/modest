let temperature = document.getElementsByClassName("temperature")


fetch(`http://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19`)
.then((response) => response.json())
.then((data) => {
	temperature.innerHTML = (data.main.temp)
	console.log(data.main.temp)
	console.log(data)
}
);

temperature.innerHTML = "data.main.temp"


/*
fetch(`http://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19`)
	.then((response) => response.json())
	.then((data) => {
		new Artical("icon", ".articels").render();
	});

class Artical {
	constructor(title, src, desc, name, parent) {
		this.title = title;
		this.src = src;
		this.desc = desc;
		this.name = name;
		this.parent = document.querySelector(parent);
	}
	render() {
		let article = document.createElement('article')
		article.classList.add("col_6")
		article.innerHTML = `
		<div class="article">
			<h2 class="article-title">
			${this.title}
			</h2>
			<div class="articcal-img">
			<img src=${this.src} alt="">
			</div>
			<div class="artical-deskriptions">
			${this.desc}
			</div>
			<div class="artical-name">
			Autor: ${this.name}
			</div>
		</div>
		`;
		this.parent.append(article)
	}
}

fetch(`db.json`)
	.then((response) => response.json())
	.then((data) => {
		data.map(({ title, src, desc, name, parent }) =>
			new Artical(title, src, desc, name, parent).render()
		);
	});





// new Artical("New 1", "img/news.png", "Helo world bla bla", "Jack 10", ".articels").render();
// new Artical("New 2", "img/news.png", "Helo world bla bla", "Jack 10", ".articels").render();



*/
