#import transformers
import flask
from flask_cors import CORS

import google.generativeai as genai
from googletrans import Translator



genai.configure(api_key="AIzaSyC1_8UFk581yz4MKrSdnqwtOK1Wb7n94MQ")

model = genai.GenerativeModel('gemini-pro')

translator = Translator()

#nlp = transformers.pipeline("question-answering")

context = '''Shop our tomatoes in shopping section. I am tomatix. I can assist you.
Sale tomatoes from the farmers directly and fertilizers for land with bio-fertilizers and chemical fertilizers.
I have Dukaan for selling tomatoes. I also sale fertilizers in Dukaan. Farmers can manage their tomatoes with the price, quantity and description in Dukaan.
Process to manage/sale tomato in Dukaan: step 1: Click add tomato\nstep 2: Fill the name\nstep 3: Fill the price\nstep 4: Enter the weight of tomato kg\nFill the description and submit the form.
Weather prediction is available to predict weather for farming. Harvesting tomatoes with weather prediction is useful for cultivation. Check weather in every places.
Community chat is to communicate between the farmers, dealers, intermediates and shopkeepers. Communicate and chat. Check tomato price in market intelligence.
To know about tomatoes please visit plant healthcare. Track your tomato truck order location in Track Order.
Find the disease in your plant, leaf or in tomato with plant protection. Plant tomato during may month. Cultivate tomato on June month.
Soil: Tomato can be grown on a wide range of soils from sandy to heavy clay. However, well-drained, sandy or red loam soils rich in organic matter with a pH range of 6.0-7.0 are considered as ideal.
Climate: Tomato is a warm season crop. The best fruit colour and quality is obtained at a temperature range of 21-24°C. Temperatures above 32o C adversely affects the fruit set and development. The plants cannot withstand frost and high humidity. It requires a low to medium rainfall. Bright sunshine at the time of fruit set helps to develop dark red coloured fruits. Temperature below 10 oC adversely affects plant tissues thereby slowing down physiological activities.
Nursery Bed Preparation: Tomato seeds are sown on nursery beds to raise seedlings for transplanting in the field. Raised beds of size 3 x 0.6 m and 10-15 cm in height are prepared. About 70 cm distance is kept between two beds to carry out operations of watering, weeding, etc. The surface of beds should be smooth and well levelled. Add sieved FYM and fine sand on the seedbed. Raised beds are necessary to avoid problem of water logging in heavy soils. In sandy soils, however, sowing can be taken up in flat beds. To avoid mortality of seedlings due to damping off, drench the seed bed first with water and then with Bavistin (15-20 g/10 litres of water).
Season of Planting: Seeds are sown in June July for autumn winter crop and for spring summer crop seeds are sown in November. In the hills seed is sown in March April.
Raising of Seedlings: About 250-300 g of seed are sufficient for raising seedlings for one hectare of land. Prior to sowing seeds are treated with fungal culture of Trichoderma viride (4 g/ kg of seed) or Thiram (2g/kg of seed) to avoid damage from damping-off disease. Sowing should be done thinly in lines spaced at 10-15 cm distance. Seeds are sown at a depth of 2-3 cm and covered with a fine layer of soil followed by light watering by water can. The beds should then be covered with dry straw or grass or sugarcane leaves to maintain required temperature and moisture. The watering should be done by water can as per the need till germination is completed. The cover of dry straw or grass is removed immediately after germination is complete. During the last week in nursery, the seedlings may be hardened by slightly withholding water.
The seedlings with 5-6 true leaves are ready for transplanting within 4 of sowing.
Land Preparation: The field is ploughed to fine tilth by giving four to five ploughing with a sufficient interval between two ploughing. Planking should be done for proper levelling. Furrows are then opened at the recommended spacing. Well-decomposed FYM (25 t/ha) is thoroughly incorporated at the time of land preparation.
Spacing: Spacing depends upon the type of variety grown and the season of planting. Normally the seedlings are transplanted at a spacing of 75-90 x 45-60 cm.
Method of Planting: Seedlings are transplanted in furrows in light soils and on side of the ridges in case of heavy soils. A pre-soaking irrigation is given 3-4 days prior to transplanting. Before planting seedlings should be dipped in a solution prepared by Nuvacron (15ml) and Dithane M - 45 (25g) in 10 litres of water for 5-6 minutes. Transplanting should preferably be done in the evening.
Weed Control: The field should be kept weed-free, especially in the initial stage of plant growth, as weeds compete with the crop and reduce the yield drastically. Frequent shallow cultivation should be done at regular interval so as to keep the field free from weeds and to facilitate soil aeration and proper root development. Deep cultivation is injurious because of the damage of roots and exposure of moist soil to the surface. Two-three hoeing and the earthing up are required to keep the crop free of weeds. Pre- emergence application of Basalin (1kg a.i./ha) or Pendimethalin (1kg a.i./ha), coupled with one hand weeding 45 days after transplanting is effective for control of weeds. Plastic mulching (black or transparent) can be used to control the weeds. Weeds can be controlled successfully by mulching plus use of herbicides such as Pendimethalin (0.75 kg a.i./ha) or Oxyfluorfen (0.12 kg a.i./ha).
Crop Rotation: Tomato should not be grown successively on the same field and a break of at least one year is required between planting of tomatoes or other Solanacesous crops (eg. Chillies, Brinjals, Capsicum, Potato, Tobacco, etc.), cucurbits and many other vegetables. The crops, which can be grown after tomatoes, are as follows- Cereals (eg. Rice, Corn Sorghum, Wheat, Millets, etc.) or Cruciferons crops (eg. Cabbage, Cauliflower, Kohlrabi etc) or Radish, Watermelon, Onion, Garlic, Groundnut, Cotton, Safflower , Sunflower, Sesame, Sugar beet and Marigold.
Intercropping: Tomato is well fitted in different cropping systems of cereals, grains, pulses and oilseeds. Cropping systems rice-tomato, rice-maize, okra-potato-tomato, tomato-onion are popular in various parts of India. Spinach or radish can also be grown as inter-crop in tomato successfully.
Staking: Due to the tall habit and heaving bearing nature of the hybrids staking is essential. Staking facilitates intercultural operations and helps in maintaining the quality of the fruits. It is done 2-3 weeks after transplanting. Staking can be done either by wooden stakes or laying overhead wires to which individual plant is tied. In case of indeterminate types, tow or three wires are stretched parallel to each other along the row and plants are tied to these wires.
Irrigation: Tomato is very sensitive to water application. Heavy irrigation provided after a long spell of drought causes cracking of the fruits. Hence it should be avoided. Light irrigation should be given 3-4 days after transplanting. Irrigation intervals should be according to soil type and rainfall, irrigation should be given 7-8 days interval during kharif, during rabi 10-12 days and 5-6 days during summer.
Flowering and fruit development are the critical stages of tomato therefore; water stress should not be given during this period.
Manuring & Fertilization: The fertilizer dose depends upon the fertility of soil and amount of organic manure applied to the crop. For a good yield, 15-20 tonnes of well-decomposed FYM is incorporated into the soil. Generally, application of 120 kg N, 80 kg P2O5 and 50 kg K2O per hectare is recommended for getting optimum yield. Half dose of N and full dose of P and K is given at the time of planting. The balance half of N is given as top dressing 30 days after transplanting.
For hybrid varieties, the recommended dose per hectare is 180 kg N, 100 kg P2 O5 and 60 kg K2 O. 60 kg N and half of P & K are given at the time of transplanting. Remaining quantities of P & K and 60 kg N is top dressed 30 after transplanting. A third dose of 60 kg N is applied 50 days after transplanting.
Nursery: Raise Marigold (Tall African variety golden age bearing yellow and orange flowers) nursery 15-20 days before tomato nursery
One week after germination of seeds, spray the seedlings with (imidacloprid 200 SL @ 0.3 ml/l or thiomethoxam 25 WP @ 0.3 g/l)
Before transplanting: Apply Neem cake 250 kg/ha ridges at the time of preparing land
Dip the roots of seedlings (do not dip the foliage as it may cause burning of leaves) with imidacloprid 200 SL @ 0.3 ml/l or thiomethoxam 25 WP @ 0.3 g/l for 5 minutes.
Main field: Transplant 20-25 day old tomato and 45-50 day old marigold simultaneously in a pattern of one row of marigold for every 16 rows of tomato. However, the first and last row of the plots should be of marigold. Simultaneous flowering of both the crops ensures attraction of fruit borers to marigold flowers.
Fifteen days after planting spray imidacloprid 200 SL @ 0.4ml/l or thiomethoxam 25 WP @ 0.3g/l for leaf curl vector (whitefly) control
Apply neem cake @ 250 kg/ha to ridges at 20-25 DAP (at flowering) to reduce nematode, fruit borer and leaf miner incidence
Spray Ha NPV (@250 LE/ha) with 1% jaggery as sunscreen at 28, 35 and 42 DAP in the evening.
Spray marigold flowers with HaNPV or destroy fruit borer larvae in them.
As an alternative to HaNPV spray, the egg parasitoids, Trichogramma chilonis, T. braziliensis and T. pretiosum @ 2.5 lakhs/ha can be released (five releases @ 50,000/ha/release). The first release has to be done at the flower initiation of the crop.
If red spider mite incidence is noticed, spray Neem soap 1 % or neem oil 1% or any synthetic acaricide like dicofol 18.5 EC (1.5 ml/l), or Ethion 50 EC ( 1.5 ml/l) or sulphur 80 WP (3 g/l) etc. Spray lower surface of the leaves.
Mechanical collection and destruction of bored fruits at periodic interval (3-4 times after fruit set) to minimize fruit borer incidence to the minimum.
Destroy leaf curl and other virus affected plants as soon as the symptoms appear in a few plants to minimize their spread.
Harvesting: Depending on the variety, fruits become ready for first picking in about 60-70 days after transplanting. The stage of harvesting depends upon the purpose to which the fruits are to be used. The different stages of harvesting are as follows-
Dark green colour - Dark green colour is changed and a reddish pink shade is observed on fruit. Fruits to be shipped are harvested at this stage. Such fruits are then sprayed with ethylene 48 hours prior to shipping. Immature green tomatoes will ripen poorly and be of low quality. A simple way to determine maturity is to slice the tomato with a sharp knife. If seeds are cut, the fruit is too immature for harvest and will not ripen properly.
Breaker stage - Dim pink colour observed on ¼ part of the fruit. Fruits are harvested at this stage to ensure the best quality. Such fruit are less prone to damage during shipment often fetch a higher price than less mature tomatoes.
Pink stage - Pink colour observed on ¾ part of the fruit.
Reddish pink- Fruits are stiff and nearly whole fruit turns reddish pink. Fruits for local sale are harvested at this stage.
Fully riped - Fruits are fully riped and soft having dark red colour. Such fruits are used for processing.
Fruits are normally harvested early in the morning or evening. The fruits are harvested by twisting motion of hand to separate fruits from the stem. Harvested fruits should be kept only in basket or crates and keep it in shade. Since all the fruits do not mature at the same time, they are harvested at an interval of 4 days. Generally there will be 7-11 harvests in a crop life span.
Yield: The yield per hectare varies greatly according to variety and season. On an average, the yield varies from 20-25 t/ha. Hybrid varieties may yield upto 50-60 t/ha.
'''
#ques = input()
app = flask.Flask(__name__)
cors = CORS(app,origins=["http://192.168.137.255:3000"])

@app.route("/chat",methods=['POST'])
def chat():
    try:
      ques = flask.request.get_json().get("question","")
      q1 = translator.detect(ques)
      translation1 = translator.translate(ques, src=q1.lang, dest='en')
      print(flask.request)
      print("translated")
      print(translation1.text)
      try:
        pass
          #print(flask.request.get_json().get("question",""))
      except:
          pass
      '''nlp_answer = nlp(question=translation1.text,context=context)
      nlp_ans = nlp_answer['answer']
      nlp_score = nlp_answer['score']'''

      '''if nlp_score>0.1:
        answer = ""

        for i in context.split('.'):
          if nlp_ans in i:
            answer+=i.replace(nlp_ans,"\""+nlp_ans+"\"")
        if answer=="":
          con = model.generate_content(ques)
          return {"answer":con.text+"\nA correction method...\n"+nlp_ans}
        else:
          #target_language = 'ta'
          #q1 = translator.detect(ques)
          translation2 = translator.translate(answer, src='en', dest=q1.lang)
          con = model.generate_content(ques)
          #print(con.text)
          #translation2 = translator.translate(con.text, src='en', dest=q1.lang)
          print(answer)
          return {"answer":translation2.text+"\n"+con.text}
      else:'''
      con = model.generate_content(ques)
      return {"answer":con.text+"\n(generated from api)"}#"\nAccuracy is low in our model so used in-built models\n"+nlp_ans+" Please try again with another command "}
    except Exception as e:
       return {"answer":e}

if __name__=="__main__":
    app.run(port=3000)

#print(nlp(question="Where to shop tomatoes?",context=context))
