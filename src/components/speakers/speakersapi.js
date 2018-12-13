const SpeakersApi = {
    speakers: [
        {
            name: "John Maxwell",
            title: "John Maxwell's Title",
            img: {
                bw: "//christfellowshipconference.com/assets/images/John_Maxwell_BW_FINAL.jpg",
                color: "//christfellowshipconference.com/assets/images/John_Maxwell_BW_FINAL.jpg",
            },
            bio: "John C. Maxwell is a #1 New York Times bestselling author, coach and speaker who has sold more than 25 million books in 50 languages. As the founder of The John Maxwell Company, The John Maxwell Team, EQUIP and the John Maxwell Foundation, he has trained more than 5 million leaders. In 2015, he reached the milestone of having trained leaders in every country of the world. The recipient of the Mother Teresa Prize for Global Peace and Leadership from the Luminary Leadership Network, Dr. Maxwell speaks each year to Fortune 500 companies, presidents of nations and many of the world's top business leaders. Before devoting himself to speaking and writing full-time, he was a pastor for more than 30 years.",
            socialMedia: [
                { name: "facebook", link: "#", color: "warning" },
                { name: "instagram", link: "#", color: "danger" },
            ]
        },
        {
            name: "Levi Lusko",
            title: "Levi Lusko's Title",
            img: {
                bw: "//christfellowshipconference.com/assets/images/Levi_Lusko_BW_FINAL.jpg",
                color: "//christfellowshipconference.com/assets/images/Levi_Lusko_BW_FINAL.jpg",
            },
            target: "#",
            bio: "Levi Lusko is the author of the bestselling book Through the Eyes of a Lion and his newest title Swipe Right. He is also the lead pastor of Fresh Life Church, a multisite church located in Montana, Utah, Oregon, and Wyoming that he and his wife Jennie pioneered in 2007. He takes pleasure in small things, such as black coffee, new shoes, fast Internet, and falling asleep in the sun. He and his wife, Jennie, have five children: Alivia, Daisy, Clover, Lennox and Lenya, who is in heaven.",
            socialMedia: [
                { name: "twitter", link: "#", color: "warning" },
                { name: "instagram", link: "#", color: "danger" },
            ]
        }
    ],
    get: function (name) {
        if (!name) { return false; }

        const isSpeaker = s => s.name.toLowerCase().replace(' ', '') === name.toLowerCase().replace(' ', '');
        return this.speakers.find(isSpeaker); // returns the actual speaker object
    }

}

export default SpeakersApi;