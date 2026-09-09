const partner = "partner";
const strategicPartner = "strategic-partner";
const honoraryPatronage = "honorary-patronage";

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
    },
    {
        id: 12,
        supportType: partner,
        imgPath: "./assets/logotypes/suncode.png",
        companyName: "Suncode",
        companyURL: "https://suncode.pl/" 
    },
    {
        id: 13,
        supportType: partner,
        imgPath: "./assets/logotypes/agraf.png",
        companyName: "Agraf",
        companyURL: "https://agraf.com.pl/" 
    },
    {
        id: 14,
        supportType: partner,
        imgPath: "./assets/logotypes/wacom.png",
        companyName: "Wacom",
        companyURL: "https://wacom.pl" 
    },
    {
        id: 15,
        supportType: partner,
        imgPath: "./assets/logotypes/alstor.png",
        companyName: "Alstor",
        companyURL: "https://alstor.pl" 
    },
    {
        id: 16,
        supportType: partner,
        imgPath: "./assets/logotypes/migra.png",
        companyName: "Migra",
        companyURL: "https://migra.pl" 
    },
    {
        id: 17,
        supportType: strategicPartner,
        imgPath: "./assets/logotypes/KM_logo.jpeg",
        companyName: "KonicaMinolta",
        companyURL: "https://www.konicaminolta.pl" 
    },
    {
        id: 18,
        supportType: partner,
        imgPath: "./assets/logotypes/nowa_era.png",
        companyName: "Nowa Era",
        companyURL: "https://www.nowaera.pl/" 
    },
    {
        id: 19,
        supportType: partner,
        imgPath: "./assets/logotypes/learnetic.png",
        companyName: "Learnetic",
        companyURL: "https://www.learnetic.pl/" 
    },
    {
        id: 20,
        supportType: partner,
        imgPath: "./assets/logotypes/musicon.png",
        companyName: "Musicon",
        companyURL: "https://musiconclub.com/" 
    },
    {
        id: 21,
        supportType: partner,
        imgPath: "./assets/logotypes/canva.png",
        companyName: "Canva",
        companyURL: "https://www.canva.com/pl_pl/" 
    },
    {
        id: 22,
        supportType: partner,
        imgPath: "./assets/logotypes/mactechnologie.png",
        companyName: "Mac",
        companyURL: "https://www.mac.pl/" 
    },
    {
        id: 23,
        supportType: partner,
        imgPath: "./assets/logotypes/logoLibrus.png",
        companyName: "Librus",
        companyURL: "https://www.librus.pl/" 
    },
    {
        id: 24,
        supportType: partner,
        imgPath: "./assets/logotypes/aktin-przyszlosc.png",
        companyName: "Aktin",
        companyURL: "https://aktin.pl/" 
    },
    {
        id: 25,
        supportType: partner,
        imgPath: "./assets/logotypes/interaktin.png",
        companyName: "InterAktin",
        companyURL: "https://aktin.pl/" 
    },
    {
        id: 26,
        supportType: partner,
        imgPath: "./assets/logotypes/classVR.png",
        companyName: "ClassVR",
        companyURL: "https://www.classvr.com/pl/" 
    },
    {
        id: 27,
        supportType: partner,
        imgPath: "./assets/logotypes/nexineo.png",
        companyName: "Nexineo",
        companyURL: "https://www.nexineo.com/pl" 
    },
    {
        id: 28,
        supportType: partner,
        imgPath: "./assets/logotypes/oeiizk.jpg",
        companyName: "OEIiZK",
        companyURL: "https://www.oeiizk.waw.pl/" 
    },
    {
        id: 29,
        supportType: partner,
        imgPath: "./assets/logotypes/nowa-szkola.jpg",
        companyName: "Nowa Szkoła",
        companyURL: "https://nowaszkola.com/nowe-dofinansowania-rzadowe" 
    },
    {
        id: 30,
        supportType: honoraryPatronage,
        imgPath: "./assets/logotypes/ministra_edukacji.png",
        companyName: "Nowa Szkoła",
        companyURL: "https://www.gov.pl/web/edukacja",
        displayOrder: 10
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
    const shuffled = [...items];

    for (let index = shuffled.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
    }

    return shuffled;
}

function sortByDisplayOrder(items) {
    return [...items].sort((firstItem, secondItem) => {
        const firstOrder = Number.isFinite(firstItem.displayOrder)
            ? firstItem.displayOrder
            : Number.MAX_SAFE_INTEGER;
        const secondOrder = Number.isFinite(secondItem.displayOrder)
            ? secondItem.displayOrder
            : Number.MAX_SAFE_INTEGER;

        if (firstOrder !== secondOrder) {
            return firstOrder - secondOrder;
        }

        return firstItem.id - secondItem.id;
    });
}

function renderPartnerLogotypes() {
    const partnersSection = document.querySelector("#partners");

    if (!partnersSection) {
        return;
    }

    partnersSection.querySelectorAll(".partners-group").forEach((group) => {
        group.remove();
    });

    const honoraryPatronages = logotypesArray.filter((logotype) => {
        return logotype.supportType === honoraryPatronage && logotype.imgPath;
    });

    const strategicPartners = logotypesArray.filter((logotype) => {
        return logotype.supportType === strategicPartner && logotype.imgPath;
    });

    const conferencePartners = logotypesArray.filter((logotype) => {
        return logotype.supportType === partner && logotype.imgPath;
    });

    const groups = [
        createPartnerGroup("Patronat Honorowy", sortByDisplayOrder(honoraryPatronages)),
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
