const partner = "partner";
const strategicPartner = "strategic-partner";

const logotypesArray = [
    {
        id: 1,
        supportType: partner,
        imgPath: "./assets/logotypes/i3connect.png",
        companyName: "i3connect",
        companyURL: "https://i3-connect.com/"
    },
    {
        id: 2,
        supportType: partner,
        imgPath: "./assets/logotypes/modi.png",
        companyName: "Modi",
        companyURL: "https://modi.edu.pl/"
    },
    {
        id: 3,
        supportType: partner,
        imgPath: "./assets/logotypes/prodata.png",
        companyName: "Prodata",
        companyURL: "https://prodata.pl/"
    },
    {
        id: 4,
        supportType: partner,
        imgPath: "./assets/logotypes/promethean.png",
        companyName: "promethean",
        companyURL: "https://prometheanworld.pl/"
    },
    {
        id: 5,
        supportType: partner,
        imgPath: "./assets/logotypes/vcloudpoint.png",
        companyName: "vcloudpoint",
        companyURL: "https://vcloudpoint.pl/"
    },
    {
        id: 6,
        supportType: strategicPartner,
        imgPath: "./assets/logotypes/aid.jpg",
        companyName: "aid",
        companyURL: "https://aid.ab.pl/"
    },
    {
        id: 7,
        supportType: partner,
        imgPath: "./assets/logotypes/Intel.png",
        companyName: "Intel",
        companyURL: "https://www.intel.pl/content/www/pl/pl/homepage.html" 
    },
    {
        id: 8,
        supportType: partner,
        imgPath: "./assets/logotypes/copilot.jpg",
        companyName: "Copilot",
        companyURL: "https://www.microsoft.com/pl-pl/windows/copilot-plus-pcs?r=1" 
    },
    {
        id: 9,
        supportType: partner,
        imgPath: "./assets/logotypes/windows11pro.jpg",
        companyName: "Intel",
        companyURL: "https://www.microsoft.com/pl-pl/windows/business/windows-11-pro#Benefits" 
    },
    {
        id: 10,
        supportType: partner,
        imgPath: "./assets/logotypes/moje-bambino.jpg",
        companyName: "Moje Bambino",
        companyURL: "https://mojebambino.pl/" 
    },
    {
        id: 11,
        supportType: partner,
        imgPath: "./assets/logotypes/educarium.png",
        companyName: "Intel",
        companyURL: "https://educarium.pl/" 
    }
];

function createPartnerLogoCard(partnerItem) {
    const hasUrl = Boolean(partnerItem.companyURL);
    const wrapper = document.createElement(hasUrl ? "a" : "div");
    wrapper.className = "partner-logo-card";

    if (hasUrl) {
        wrapper.href = partnerItem.companyURL;
        wrapper.target = "_blank";
        wrapper.rel = "noreferrer";
        wrapper.setAttribute("aria-label", `Przejdź do strony ${partnerItem.companyName}`);
    }

    const image = document.createElement("img");
    image.src = partnerItem.imgPath;
    image.alt = `Logo ${partnerItem.companyName}`;
    image.loading = "lazy";
    image.decoding = "async";

    wrapper.append(image);

    return wrapper;
}

function createPartnerGroup(title, items) {
    if (items.length === 0) {
        return null;
    }

    const group = document.createElement("div");
    group.className = "partners-group";

    const heading = document.createElement("h3");
    heading.className = "section-title";
    heading.textContent = title;

    const grid = document.createElement("div");
    grid.className = "partners-grid";

    items.forEach((item) => {
        grid.append(createPartnerLogoCard(item));
    });

    group.append(heading, grid);

    return group;
}

function shuffleLogotypes(items) {
    return [...items].sort(() => Math.random() - 0.5);
}

function renderPartnerLogotypes() {
    const partnersSection = document.querySelector("#partners");

    if (!partnersSection) {
        return;
    }

    partnersSection.querySelectorAll(".partners-group").forEach((group) => {
        group.remove();
    });

    const strategicPartners = logotypesArray.filter((logotype) => {
        return logotype.supportType === strategicPartner && logotype.imgPath;
    });

    const conferencePartners = logotypesArray.filter((logotype) => {
        return logotype.supportType === partner && logotype.imgPath;
    });

    const groups = [
        createPartnerGroup("Partnerzy strategiczni", shuffleLogotypes(strategicPartners)),
        createPartnerGroup("Partnerzy konferencji", shuffleLogotypes(conferencePartners)),
    ].filter(Boolean);

    if (groups.length === 0) {
        return;
    }

    partnersSection.append(...groups);
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderPartnerLogotypes);
} else {
    renderPartnerLogotypes();
}
