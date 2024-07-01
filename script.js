document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const drone = params.get("drone");
    const mainContent = document.getElementById("audio-content");

    if (drone) {
        mainContent.innerHTML = generateAudioContent(drone);
    } else {
        mainContent.innerHTML = "<p>No drone selected.</p>";
    }
});

function generateAudioContent(drone) {
    const droneName = drone.replace("_", " ");
    
    // Define a mapping of drone names to their respective image file names
    const droneImageMap = {
        'Autel_Evo': 'Autel_Evo.jpeg',
        'David_Tricopter': 'David_Tricopter.JPG',
        'DJI_Avata': 'DJI_Avata.jpeg',
        'DJI_FPV': 'DJI_FPV.png',
        'DJI_Matrice200': 'DJI_Matrice200.png',
        'DJI_Matrice200_V2': 'DJI_Matrice200_V2.jpeg',
        'DJI_Mavic2': 'DJI_Mavic2.png',
        'DJI_Matrice600p': 'DJI_Matrice600p.png',
        'DJI_Mavic_Air2': 'DJI_Mavic_Air2.jpeg',
        'DJI_Mavic_Mini1': 'DJI_Mavic_Mini1.png',
        'DJI_Mavic_Mini2': 'DJI_Mavic_Mini2.png',
        'DJI_Mavic2pro': 'DJI_Mavic2pro.png',
        'DJI_Phantom2': 'DJI_Phantom2.jpeg',
        'DJI_Phantom4': 'DJI_Phantom4.jpeg',
        'DJI_Tello_TT': 'DJI_Tello_TT.jpeg',
        'DJI_Tello': 'DJI_Tello.JPG',
        'Hasakee_Q11': 'Hasakee_Q11.JPG',
        'Holystone_HS210': 'Holystone_HS210.jpeg',
        'PhenoBee': 'PhenoBee.JPG',
        'Splash': 'Splash.jpeg',
        'Syma_X5SW': 'Syma_X5SW.jpeg',
        'Syma_X5UW': 'Syma_X5UW.jpeg',
        'Syma_X8SW': 'Syma_X8SW.webp',
        'Syma_X20': 'Syma_X20.jpeg',
        'Syma_X20P': 'Syma_X20P.jpeg',
        'Syma_X26': 'Syma_X26.jpeg',
        'UDI_U46': 'UDI_U46.jpeg',
        'Yuneec_Typhoon': 'Yuneec_Typhoon.jpeg'
    };

    // Get the image file name for the given drone name
    const droneImage = droneImageMap[drone];

    // Update the audio files array based on the drone name
    const droneAudioMap = {
        'Autel_Evo': [
            'audio/Autel_Evo_II/Autel_Evo_1.wav',
            'audio/Autel_Evo_II/Autel_Evo_2.wav',
            'audio/Autel_Evo_II/Autel_Evo_3.wav',
            'audio/Autel_Evo_II/Autel_Evo_4.wav'
        ],
        'David_Tricopter': [
            'audio/David_Tricopter/David_Tricopter_1.wav',
            'audio/David_Tricopter/David_Tricopter_2.wav',
            'audio/David_Tricopter/David_Tricopter_3.wav',
            'audio/David_Tricopter/David_Tricopter_4.wav'
        ],
        'DJI_Avata': [
            'audio/DJI_Avata/DJI_Avata_1.wav',
            'audio/DJI_Avata/DJI_Avata_2.wav',
            'audio/DJI_Avata/DJI_Avata_3.wav',
            'audio/DJI_Avata/DJI_Avata_4.wav'
        ],
        'DJI_FPV': [
            'audio/DJI_FPV/DJI_FPV_1.wav',
            'audio/DJI_FPV/DJI_FPV.wav',
            'audio/DJI_FPV/DJI_FPV_3.wav',
            'audio/DJI_FPV/DJI_FPV_4.wav'
        ],
        'DJI_Matrice200': [
            'audio/DJI_Matrice200/DJI_Matrice200_1.wav',
            'audio/DJI_Matrice200/DJI_Matrice200_2.wav',
            'audio/DJI_Matrice200/DJI_Matrice200_3.wav',
            'audio/DJI_Matrice200/DJI_Matrice200_4.wav'
        ],
        'DJI_Mavic2': [
            'audio/DJI_Mavic2/DJI_Mavic2_1.wav',
            'audio/DJI_Mavic2/DJI_Mavic2_2.wav',
            'audio/DJI_Mavic2/DJI_Mavic2_3.wav',
            'audio/DJI_Mavic2/DJI_Mavic2_4.wav'
        ],
        'DJI_Matrice200_V2': [
            'audio/DJI_Matrice200_V2/DJI_Matrice200_V2_1.wav',
            'audio/DJI_Matrice200_V2/DJI_Matrice200_V2_2.wav',
            'audio/DJI_Matrice200_V2/DJI_Matrice200_V2_3.wav',
            'audio/DJI_Matrice200_V2/DJI_Matrice200_V2_4.wav'
        ],
        'DJI_Matrice600p': [
            'audio/DJI_Matrice600p/DJI_Matrice600p_1.wav',
            'audio/DJI_Matrice600p/DJI_Matrice600p_2.wav',
            'audio/DJI_Matrice600p/DJI_Matrice600p_3.wav',
            'audio/DJI_Matrice600p/DJI_Matrice600p_4.wav'
        ],
        'DJI_Mavic_Air2': [
            'audio/DJI_Mavic_Air2/DJI_Mavic_Air2_1.wav',
            'audio/DJI_Mavic_Air2/DJI_Mavic_Air2_2.wav',
            'audio/DJI_Mavic_Air2/DJI_Mavic_Air2_3.wav',
            'audio/DJI_Mavic_Air2/DJI_Mavic_Air2_4.wav'
        ],
        'DJI_Mavic_Mini1': [
            'audio/DJI_Mavic_Mini1/DJI_Mavic_Mini1_1.wav',
            'audio/DJI_Mavic_Mini1/DJI_Mavic_Mini1_2.wav',
            'audio/DJI_Mavic_Mini1/DJI_Mavic_Mini1_3.wav',
            'audio/DJI_Mavic_Mini1/DJI_Mavic_Mini1_4.wav'
        ],
        'DJI_Mavic_Mini2': [
            'audio/DJI_Mavic_Mini2/DJI_Mavic_Mini2_1.wav',
            'audio/DJI_Mavic_Mini2/DJI_Mavic_Mini2_2.wav',
            'audio/DJI_Mavic_Mini2/DJI_Mavic_Mini2_3.wav',
            'audio/DJI_Mavic_Mini2/DJI_Mavic_Mini2_4.wav'
        ],
        'DJI_Mavic2pro': [
            'audio/DJI_Mavic2pro/DJI_Mavic2pro_1.wav',
            'audio/DJI_Mavic2pro/DJI_Mavic2pro_2.wav',
            'audio/DJI_Mavic2pro/DJI_Mavic2pro_3.wav',
            'audio/DJI_Mavic2pro/DJI_Mavic2pro_4.wav'
        ],
        'DJI_Mavic2s': [
            'audio/DJI_Mavic2s/DJI_Mavic2s_1.wav',
            'audio/DJI_Mavic2s/DJI_Mavic2s_2.wav',
            'audio/DJI_Mavic2s/DJI_Mavic2s_3.wav',
            'audio/DJI_Mavic2s/DJI_Mavic2s_4.wav'
        ],
        'DJI_Phantom2': [
            'audio/DJI_Phantom2/DJI_Phantom2_1.wav',
            'audio/DJI_Phantom2/DJI_Phantom2_2.wav',
            'audio/DJI_Phantom2/DJI_Phantom2_3.wav',
            'audio/DJI_Phantom2/DJI_Phantom2_4.wav'
        ],
        'DJI_Phantom4': [
            'audio/DJI_Phantom4/DJI_Phantom4_1.wav',
            'audio/DJI_Phantom4/DJI_Phantom4_2.wav',
            'audio/DJI_Phantom4/DJI_Phantom4_3.wav',
            'audio/DJI_Phantom4/DJI_Phantom4_4.wav'
        ],
        'DJI_Tello': [
            'audio/DJI_Tello/DJI_Tello_1.wav',
            'audio/DJI_Tello/DJI_Tello_2.wav',
            'audio/DJI_Tello/DJI_Tello_3.wav',
            'audio/DJI_Tello/DJI_Tello_4.wav'
        ],
        'DJI_Tello_TT': [
            'audio/DJI_Tello_TT/DJI_Tello_TT_1.wav',
            'audio/DJI_Tello_TT/DJI_Tello_TT_2.wav',
            'audio/DJI_Tello_TT/DJI_Tello_TT_3.wav',
            'audio/DJI_Tello_TT/DJI_Tello_TT_4.wav'
        ],
        'Hasakee_Q11': [
            'audio/Hasakee_Q11/Hasakee_Q11_1.wav',
            'audio/Hasakee_Q11/Hasakee_Q11_2.wav',
            'audio/Hasakee_Q11/Hasakee_Q11_3.wav',
            'audio/Hasakee_Q11/Hasakee_Q11_4.wav'
        ],
        'Holystone_HS210': [
            'audio/Holystone_HS210/Holystone_HS210_1.wav',
            'audio/Holystone_HS210/Holystone_HS210_2.wav',
            'audio/Holystone_HS210/Holystone_HS210_3.wav',
            'audio/Holystone_HS210/Holystone_HS210_4.wav'
        ],
        'PhenoBee': [
            'audio/PhenoBee.PhenoBee_1.wav',
            'audio/PhenoBee.PhenoBee_2.wav',
            'audio/PhenoBee.PhenoBee_3.wav',
            'audio/PhenoBee.PhenoBee_4.wav'
        ],
        'Splash': [
            'audio/Splash/Splash_1.wav',
            'audio/Splash/Splash_2.wav',
            'audio/Splash/Splash_3.wav',
            'audio/Splash/Splash_4.wav'
        ],
        'Syma_X5SW': [
            'audio/Syma_X5SW/Syma_X5SW_1.wav',
            'audio/Syma_X5SW/Syma_X5SW_2.wav',
            'audio/Syma_X5SW/Syma_X5SW_3.wav',
            'audio/Syma_X5SW/Syma_X5SW_4.wav'
        ],
        'Syma_X5UW': [
            'audio/Syma_X5UW/Syma_X5UW_1.wav',
            'audio/Syma_X5UW/Syma_X5UW_2.wav',
            'audio/Syma_X5UW/Syma_X5UW_3.wav',
            'audio/Syma_X5UW/Syma_X5UW_4.wav'
        ],
        'Syma_X8SW': [
            'audio/Syma_X8SW/Syma_X8SW_1.wav',
            'audio/Syma_X8SW/Syma_X8SW_2.wav',
            'audio/Syma_X8SW/Syma_X8SW_3.wav',
            'audio/Syma_X8SW/Syma_X8SW_4.wav'
        ],
        'Syma_X20': [
            'audio/Syma_X20/Syma_X20_1.wav',
            'audio/Syma_X20/Syma_X20_2.wav',
            'audio/Syma_X20/Syma_X20_3.wav',
            'audio/Syma_X20/Syma_X20_4.wav'
        ],
        'Syma_X20P': [
            'audio/Syma_X20P/Syma_X20P_1.wav',
            'audio/Syma_X20P/Syma_X20P_2.wav',
            'audio/Syma_X20P/Syma_X20P_3.wav',
            'audio/Syma_X20P/Syma_X20P_4.wav'
        ],
        'Syma_X26': [
            'audio/Syma_X26/Syma_X26_1.wav',
            'audio/Syma_X26/Syma_X26_2.wav',
            'audio/Syma_X26/Syma_X26_3.wav',
            'audio/Syma_X26/Syma_X26_4.wav'
        ],
        'UDI_U46': [
            'audio/UDI_U46/UDI_U46_1.wav',
            'audio/UDI_U46/UDI_U46.wav',
            'audio/UDI_U46/UDI_U46.wav',
            'audio/UDI_U46/UDI_U46_4.wav'
        ],
        'Yuneec_Typhoon': [
            'audio/Yuneec_Typhoon/Yuneec_Typhoon_H_Plus_1.wav',
            'audio/Yuneec_Typhoon/Yuneec_Typhoon_H_Plus_2.wav',
            'audio/Yuneec_Typhoon/Yuneec_Typhoon_H_Plus_3.wav',
            'audio/Yuneec_Typhoon/Yuneec_Typhoon_H_Plus_4.wav'
        ]
    };

    const audioFiles = droneAudioMap[drone];

    const droneBuyLinks = {
        'Autel_Evo': 'https://www.dslrpros.com/autel-evo-ii-pro-6k-rugged-bundle-v3.html',
        'DJI_Avata': 'https://store.dji.com/product/dji-avata-2?vid=164721',
        'DJI_FPV': 'https://store.dji.com/product/dji-fpv?vid=101601',
        'DJI_Matrice200_V2': 'https://www.adorama.com/us1741589.html?gad_source=1&gclid=CjwKCAjw1emzBhB8EiwAHwZZxSWRF91fvUggdaqMnLgzIV7LSR_dweXkjkgmb2WQ2Opaz7WROmrxUBoCMWAQAvD_BwE&gclsrc=aw.ds&utm_source=inc-google-shop-p',
        'DJI_Matrice200': 'https://www.adorama.com/us1783996.html?gad_source=1&gclid=CjwKCAjw1emzBhB8EiwAHwZZxT3NBvJudFTE7-VUTOhjOFdamnVNO0qdaoa5cWQSKGGPEIFl7BchjBoCF3QQAvD_BwE&gclsrc=aw.ds&utm_source=inc-google-shop-p',
        'DJI_Matrice600p': 'https://www.dronenerds.com/products/dji-matrice-600-pro-ready-to-fly-red-camera-kit-m600redcamkit-dji?variant=46717485285692&utm_term=&utm_campaign=Consumer+-+Performance+Max-+Nonpriority+-+JF&utm_source=adwords&utm_medium=ppc&hsa_acc=5112913348&hsa_net=adwords&hsa_grp=&hsa_ver=3&hsa_kw=&hsa_tgt=&hsa_mt=&hsa_ad=&hsa_src=x&hsa_cam=21174956849&gad_source=1&gclid=CjwKCAjw1emzBhB8EiwAHwZZxYPI8nd_4HxUL3ZS6zdbwVq_BfDqCaYILn8fqRbvHc-adHNZGI3lIRoC_J0QAvD_BwE',
        'DJI_Mavic_Mini1': 'https://a.co/d/0iyDiKs3',
        'DJI_Mavic_Mini2': 'https://www.bestbuy.com/site/dji-mini-2-se-drone-with-remote-control-gray/6538899.p?skuId=6538899&extStoreId=264&utm_source=feed&ref=212&loc=19746639289&gad_source=1&gclid=CjwKCAjw1emzBhB8EiwAHwZZxZY3nUy1X4w5_TE-scYIALWKhtUWdH6-Cu3Pf7lYx8iXZxEIbRupXxoCQdoQAvD_BwE&gclsrc=aw.ds',
        'DJI_Mavic2': 'https://a.co/d/0hBnIadd',
        'DJI_Mavic2pro': 'https://a.co/d/00e5P9wD',
        'DJI_Phantom2': 'https://www.ebay.com/itm/256506729687?chn=ps&mkevt=1&mkcid=28&srsltid=AfmBOorGnUyl26FvY6DciXine73PlQoK-axz89I368Znv3QyvA17Gt6L7DI',
        'DJI_Phantom4': 'https://store.dji.com/product/phantom-4-pro-v2?site=brandsite&from=buy_now_bar&vid=43151',
        'DJI_Tello_TT': 'https://www.congeriem.com/dji-robomaster-tt-tello-talent-dji-cp-tl-00000066-03.html?srsltid=AfmBOoqGpUs4tnd0zT8Bm-l91_jvYjo7_gOX01_-V_3_FsnTvpalu6gZpqE',
        'DJI_Tello': 'https://www.mercari.com/us/item/m37258828779/?srsltid=AfmBOoqinpM1uK5cdM98wckL48bn4hwilrKKraJP7-y6_AT8cHOMo9ZOcy0',
        'Hasakee_Q11': 'https://a.co/d/036h52vH',
        'Holystone_HS210': 'https://a.co/d/083y7a5B',
        'Splash': 'https://www.wellbots.com/products/swellpro-splash-drone-4-waterproof-night-fishing-bundle-w-free-insurance?variant=39696131031088&gad_source=1&gclid=CjwKCAjw-O6zBhASEiwAOHeGxX03s2N4tCzcxOY0-1BAHIiGShB0rEbqJEQQuLQB8puajm09HEJlFxoCBxIQAvD_BwE',
        'Syma_X5SW': 'https://a.co/d/07ALdRx6',
        'Syma_X5UW': 'https://www.ebay.com/itm/115897380891?chn=ps&norover=1&mkevt=1&mkrid=711-117182-37290-0&mkcid=2&mkscid=101&itemid=115897380891&targetid=2295557532190&device=c&mktype=pla&googleloc=9010366&poi=&campaignid=19851828444&mkgroupid=160536780385&rlsatarget=pla-2295557532190&abcId=9307249&merchantid=8562194&gad_source=4&gbraid=0AAAAAD_QDh8BhhPt1pU0DWjpH8XYsR5fz&gclid=CjwKCAjw-O6zBhASEiwAOHeGxWKUH1QEUgPEYm2BGJs9lOHw7UPZiw0FL2eEEuAB2_JldBtoc7x88BoCKjwQAvD_BwE',
        'Syma_X8SW': 'https://www.alibaba.com/product-detail/Syma-X8SW-RC-Drone-Remote-Control_62447991127.html',
        'Syma_X20': 'https://a.co/d/0cZRiJpM',
        'Syma_X20P': 'https://a.co/d/06UmLQtC',
        'Syma_X26': 'https://www.walmart.com/ip/POCO-DIVO-Gesture-Operation-Toy-UFO-X26-SYMA-Infrared-Obstacle-Avoidance-Kids-Safety-Drone-with-Light/340769190?wmlspartner=wlpa&selectedSellerId=13362&adid=22222222227340769190_13362_14069003552_202077872&wl0=&wl1=g&wl2=c&wl3=42423897272&wl4=pla-295289030566&wl5=9010366&wl6=&wl7=&wl8=&wl9=pla&wl10=118770687&wl11=online&wl12=340769190_13362&veh=sem&gad_source=1&gclid=CjwKCAjw-O6zBhASEiwAOHeGxai_xpN_SAtHZsQr0uSlqyFbiEPqVvPagH2LTgXbnKTgL_0Cgh3XwBoCndQQAvD_BwE',
        'UDI_U46': 'https://www.walmart.com/ip/UDI-RC-U46-Mini-Drone-for-Kids-2-4Ghz-RC-Drones-with-Auto-Hovering-Headless-Mode-Nano-Quadcopter-Blue/3140680572',
        'Yuneec_Typhoon': 'https://www.adorama.com/yuntyhprbpus.html?gad_source=1&gclid=CjwKCAjw-O6zBhASEiwAOHeGxYcc6cdNXey2Sbh3nozrpnWQJtL88D0iN-pjJBaufL48lIuBYpiMQBoClKYQAvD_BwE&gclsrc=aw.ds&utm_source=inc-google-shop-p'
    };

    const aboutLinks = {
        'David_Tricopter': 'https://youtu.be/rNy6HMie_Yg?si=lcYIZjJNS--naK2_',
        'PhenoBee': 'https://engineering.purdue.edu/ABEPlantSensorLab/research/field-phenotyping-robotics'
    };

    let buttonHTML;
    if (drone in aboutLinks) {
        buttonHTML = `<a href="${aboutLinks[drone]}" class="buy-link" style="padding: 10px 20px; background-color: #000; color: #fff; text-decoration: none; border-radius: 5px;">About ${droneName}</a>`;
    } else {
        buttonHTML = `<a href="${droneBuyLinks[drone]}" class="buy-link" style="padding: 10px 20px; background-color: #000; color: #fff; text-decoration: none; border-radius: 5px;">Buy ${droneName}</a>`;
    }

    let audioControls = "";
    audioFiles.forEach((file, index) => {
        audioControls += `
            <div class="audio-container">
                <audio controls>
                    <source src="${file}" type="audio/wav">
                    Your browser does not support the audio element.
                </audio>
                <button onclick="location.href='visuals_template.html?drone=${drone}&audio=${index + 1}'">Visualize Audio ${index + 1}</button>
            </div>
        `;
    });



    return `
        <h2>${droneName}</h2>
        <div class="explanation-section">
            <h3>Understanding Drone Sounds</h3>
            <p>This tool allows you to explore and analyze different drone sounds. You have the following options:</p>
            <ul>
                <li>Listen to different audio samples to understand the variations in sound.</li>
                <li>Click on the "Visualize" button to see the corresponding spectrogram and MFCC plots for each audio sample.</li>
                <li>Compare the visualizations to get insights into the frequency and cepstral characteristics of the sounds.</li>
                <li>Use these insights for applications such as drone identification, sound quality analysis, and more.</li>
            </ul>
        </div>
        <img src="drone_white/${droneImage}" alt="${droneName}" class="drone-image" style="width: 300px; display: block; margin: 0 auto;">
        <div class="buy-button" style="text-align: center; margin: 20px 0;">
            ${buttonHTML}
        </div>
        <div class="audio-files">
            ${audioControls}
        </div>
    `;

}
