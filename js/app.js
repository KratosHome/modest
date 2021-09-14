


class Artical {
	constructor(description, icon, parent) {
		this.description = description
		this.wther_img = icon;
		this.parent = document.querySelector(parent);
	}
	render() {
		let article = document.createElement("article")
		article.innerHTML = `
		<div class="row wteher_block">
		<div class="section_one">
			<div class="data">jun 13,2015-sat</div>
			<div class="time">SUN 8:30 AM</div>
			<div class="time_two">3:02 RM</div>
			<div class="humidity">Humidity: 57%</div>
			<div class="pressure">Pressure: 1015 hPa</div>
			<div class="wind">Wind: 14 km/h SSE</div>
		</div>
		<div class="secctoin_two">
			<div class="wther_img">
				<img src=${this.icon} alt="">
			</div>
			<div class="temperature">
				30C
			</div>
			<div class="feels">Feels Like: 32C</div>
			<div class="description">${this.description + " bla bla"}</div>
		<div div class="data_two" > Jun 13 11: 02 PM</div >
		</div >
	</div >
	`;
		this.parent.append(article)
	}
};

fetch(`http://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19`)
	.then((response) => response.json())
	.then((data) => {
		// data.products.map((item) => (new Artical(item.icon, item.description, item.parent).render()));
		console.log(data)
		new Artical(this.description, this.icon, this.parent).render()
	}
	);

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
