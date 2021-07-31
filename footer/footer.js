const aboutArray = ["使用 Airbnb 的方法", "Airbnb 新聞中心", "Airbnb 2021", "投資人", "Airbnb Plus", "Airbnb Luxe", "HotelTonight", "商務 Airbnb", "由房東和體驗達人為你實現", "工作機會", "來自創辦人的信"]

        const communityArray = ["多元化與歸屬感", "無障礙設施", "Airbnb 推廣夥伴", "防疫人員住宿", "邀請計畫", "Airbnb.org"]

        const landlordArray = ["出租房源", "舉辦線上體驗", "舉辦體驗", "房東義務", "推薦房東", "資源中心", "社區中心"]

        const serviceArray = ["我們的新冠肺炎因應措施", "說明中心", "退訂選項", "鄰里支援", "信任與安全"]

        const socialArray=["fa-facebook-f","fa-weibo","fa-twitter","fa-instagram"]


        let about = document.querySelector('#About');
        let community = document.querySelector('#Community');
        let landlord = document.querySelector('#Landlord');
        let service = document.querySelector('#Service');
        let footerList = document.querySelector('#footerList');
        let social=document.querySelector(".social");
        let iconList=document.querySelector("#icons")

        function listItem(arr,target){
            arr.forEach(function (item) {
                let cloneContent = footerList.content.cloneNode(true);
                cloneContent.querySelector('.footerListItem').innerText = item;
                target.append(cloneContent);
            });
        }

        window.onload = function () {
            listItem(aboutArray,about);
            listItem(communityArray,community);
            listItem(landlordArray,landlord);
            listItem(serviceArray,service);
            

            socialArray.forEach(function(item){
                let cloneContent=iconList.content.cloneNode(true);
                cloneContent.querySelector("i").classList.add(`${item}`);

                social.append(cloneContent);
            })
        }