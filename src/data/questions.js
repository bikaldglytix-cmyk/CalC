export const questions = [
  {
    id: 'GQ1',
    category: { en: 'General', np: 'सामान्य' },
    q: { en: 'Which geographic region do you live in?', np: 'तपाईं कुन भौगोलिक क्षेत्रमा बस्नुहुन्छ?' },
    story: { en: 'Where the land shapes our lives...', np: 'जहाँ भूमिले हाम्रो जीवनलाई आकार दिन्छ...' },
    fact: { en: 'Different regions have very different energy needs, especially for winter heating.', np: 'विभिन्न क्षेत्रहरूमा ऊर्जाको आवश्यकता फरक हुन्छ, विशेष गरी जाडोमा।' },
    options: [
      { id: 'mountain', label: { en: 'Mountain Region', np: 'हिमाली क्षेत्र' }, parts: { home: 0 } },
      { id: 'hilly', label: { en: 'Hilly Region', np: 'पहाडी क्षेत्र' }, parts: { home: 0 } },
      { id: 'terai', label: { en: 'Terai Region', np: 'तराई क्षेत्र' }, parts: { home: 0 } }
    ]
  },
  {
    id: 'GQ2',
    category: { en: 'General', np: 'सामान्य' },
    q: { en: 'Which type of area do you live in?', np: 'तपाईं कस्तो क्षेत्रमा बस्नुहुन्छ?' },
    story: { en: 'From bustling cities to quiet villages...', np: 'व्यस्त सहरदेखि शान्त गाउँसम्म...' },
    fact: { en: 'Urban areas rely more on LPG and electricity, while rural areas still depend heavily on firewood.', np: 'सहरी क्षेत्रमा एलपीजी र बिजुलीको बढी प्रयोग हुन्छ भने ग्रामीण क्षेत्रमा दाउराको बढी प्रयोग हुन्छ।' },
    options: [
      { id: 'urban', label: { en: 'Urban', np: 'सहरी क्षेत्र' }, parts: { home: 0 } },
      { id: 'semi_urban', label: { en: 'Semi-urban', np: 'अर्ध-सहरी क्षेत्र' }, parts: { home: 0 } },
      { id: 'rural_hills_terai', label: { en: 'Rural Hills/Terai', np: 'ग्रामीण पहाड/तराई' }, parts: { home: 0 } },
      { id: 'rural_highland_mountain', label: { en: 'Rural Highland/Mountain', np: 'ग्रामीण हिमाली/उच्च भेग' }, parts: { home: 0 } }
    ]
  },
  {
    id: 'A1',
    category: { en: 'Home & Energy', np: 'घर र ऊर्जा' },
    q: { en: 'What is your PRIMARY cooking fuel?', np: 'मुख्य खाना पकाउने इन्धन के हो?' },
    story: { en: 'The hearth is the heart of the home...', np: 'चुल्हो घरको मुटु हो...' },
    fact: { en: 'Traditional firewood cooking in Nepal is a major source of indoor air pollution. Biogas and induction are far cleaner.', np: 'नेपालमा दाउराले पकाउँदा घरभित्रको प्रदूषण बढ्छ। बायोग्यास र इन्डक्शन धेरै सफा हुन्छन्।' },
    options: [
      { id: 'firewood', label: { en: 'Firewood', np: 'दाउरा' }, parts: { home: 0.5 } },
      { id: 'lpg', label: { en: 'LPG cylinder', np: 'एलपीजी' }, parts: { home: 0.4 } },
      { id: 'biogas', label: { en: 'Biogas', np: 'बायोग्यास' }, parts: { home: 0.05 } },
      { id: 'induction', label: { en: 'Electric induction', np: 'विद्युत्' }, parts: { home: 0.02 } },
      { id: 'kerosene', label: { en: 'Kerosene', np: 'मट्टितेल' }, parts: { home: 0.6 } },
      { id: 'mixed', label: { en: 'Mixed (firewood + LPG)', np: 'मिश्रित' }, parts: { home: 0.8 } }
    ]
  },
  {
    id: 'A2',
    category: { en: 'Home & Energy', np: 'घर र ऊर्जा' },
    q: { en: 'Do you use a traditional open stove (chulo) or improved cookstove?', np: 'पारम्परिक चुलो वा सुधारिएको चुलो?' },
    story: { en: 'The fire that feeds us...', np: 'हामीलाई खुवाउने आगो...' },
    fact: { en: 'An improved cookstove can halve your firewood consumption and drastically reduce smoke inhalation.', np: 'सुधारिएको चुलोले दाउराको खपत आधा घटाउन सक्छ र धुवाँ कम गर्छ।' },
    options: [
      { id: 'traditional', label: { en: 'Traditional open chulo', np: 'पारम्परिक चुलो' }, parts: { home: 0.3 } },
      { id: 'improved', label: { en: 'Improved cookstove', np: 'सुधारिएको चुलो' }, parts: { home: 0.1 } },
      { id: 'rocket', label: { en: 'Rocket stove', np: 'रकेट स्टोभ' }, parts: { home: 0.05 } },
      { id: 'lpg_electric', label: { en: 'LPG / electric only', np: 'एलपीजी/विद्युत् मात्र' }, parts: { home: 0 } }
    ]
  },
  {
    id: 'A3',
    category: { en: 'Home & Energy', np: 'घर र ऊर्जा' },
    q: { en: 'How many LPG cylinders does your household use per month?', np: 'घरमा महिनाको कति LPG सिलिन्डर खर्च हुन्छ?' },
    story: { en: 'Fuel brought from far away...', np: 'टाढाबाट ल्याइएको इन्धन...' },
    fact: { en: 'A single 14.2kg LPG cylinder releases about 42kg of CO2 when burned.', np: 'एउटा १४.२ केजीको एलपीजी सिलिन्डर बल्दा करिब ४२ केजी कार्बन डाइअक्साइड निस्कन्छ।' },
    options: [
      { id: '0', label: { en: '0', np: '०' }, parts: { home: 0 } },
      { id: '0_5', label: { en: '0.5 (1 per 2 months)', np: '०.५' }, parts: { home: 0.1 } },
      { id: '1', label: { en: '1', np: '१' }, parts: { home: 0.2 } },
      { id: '2', label: { en: '2', np: '२' }, parts: { home: 0.4 } },
      { id: '3plus', label: { en: '3+', np: '३+' }, parts: { home: 0.6 } }
    ]
  },
  {
    id: 'A4',
    category: { en: 'Home & Energy', np: 'घर र ऊर्जा' },
    q: { en: 'Does your household burn agricultural waste (crop residue) near your home?', np: 'घरको आसपास कृषि फोहोर जलाउनुहुन्छ?' },
    story: { en: 'Smoke rising from the fields...', np: 'खेतबाट उठ्ने धुवाँ...' },
    fact: { en: 'Open burning of crop residue releases black carbon, a potent warmer that accelerates Himalayan glacier melt.', np: 'कृषि फोहोर जलाउँदा निस्कने कालो कार्बनले हिमाल पग्लन मद्दत गर्छ।' },
    options: [
      { id: 'never', label: { en: 'Never', np: 'कहिल्यै छैन' }, parts: { home: 0 } },
      { id: 'occasionally', label: { en: 'Occasionally', np: 'कहिलेकाहीँ' }, parts: { home: 0.1 } },
      { id: 'regularly', label: { en: 'Regularly', np: 'नियमित' }, parts: { home: 0.3 } },
      { id: 'frequently', label: { en: 'Very frequently', np: 'धेरै पटक' }, parts: { home: 0.5 } }
    ]
  },
  {
    id: 'A5',
    category: { en: 'Home & Energy', np: 'घर र ऊर्जा' },
    q: { en: 'How many hours per day does your household use electric fans, lights, or appliances?', np: 'दैनिक कति घण्टा बिजुलीका सामान चलाउनुहुन्छ?' },
    story: { en: 'Power flowing from the rivers...', np: 'नदीहरूबाट बग्ने ऊर्जा...' },
    fact: { en: 'Nepal\'s electricity is mostly hydropower, meaning your electric footprint is incredibly low compared to the global average!', np: 'नेपालको बिजुली मुख्यतया जलविद्युत हो, त्यसैले बिजुलीको कार्बन छाप विश्वव्यापी औसतभन्दा धेरै कम छ।' },
    options: [
      { id: 'under2', label: { en: '< 2 hours', np: '२ घण्टाभन्दा कम' }, parts: { home: 0.01 } },
      { id: '2to6', label: { en: '2-6 hours', np: '२-६ घण्टा' }, parts: { home: 0.02 } },
      { id: '6to12', label: { en: '6-12 hours', np: '६-१२ घण्टा' }, parts: { home: 0.03 } },
      { id: '12plus', label: { en: '12+ hours', np: '१२+ घण्टा' }, parts: { home: 0.05 } }
    ]
  },
  {
    id: 'A6',
    category: { en: 'Home & Energy', np: 'घर र ऊर्जा' },
    q: { en: 'Do you heat your home using firewood, coal, or electric heaters in winter?', np: 'जाडोमा घर तताउन के प्रयोग गर्नुहुन्छ?' },
    story: { en: 'Keeping warm in the cold months...', np: 'जाडो महिनाहरूमा न्यानो रहँदै...' },
    fact: { en: 'In the mountain regions, winter heating can double a household\'s annual carbon footprint if firewood is used.', np: 'हिमाली क्षेत्रमा दाउराले घर तताउँदा वार्षिक कार्बन छाप दोब्बर हुन सक्छ।' },
    options: [
      { id: 'none', label: { en: 'No heating', np: 'ताप आवश्यक छैन' }, parts: { home: 0 } },
      { id: 'electric', label: { en: 'Electric heater', np: 'विद्युतीय हिटर' }, parts: { home: 0.01 } },
      { id: 'firewood', label: { en: 'Firewood heater', np: 'दाउरा हिटर' }, parts: { home: 0.4 } },
      { id: 'coal', label: { en: 'Coal heater', np: 'कोइला हिटर' }, parts: { home: 0.6 } }
    ]
  },
  {
    id: 'B1',
    category: { en: 'Transport', np: 'यातायात' },
    q: { en: 'How do you travel to school or work most days?', np: 'धेरैजसो विद्यालय/कार्यालय कसरी जानुहुन्छ?' },
    story: { en: 'Every journey leaves a trace...', np: 'हरेक यात्राले छाप छोड्छ...' },
    fact: { en: 'Switching from a motorbike to a Safa Tempo or walking drastically reduces air pollution.', np: 'मोटरसाइकलको साटो सफा टेम्पो वा हिँड्ने गर्दा प्रदूषण धेरै कम हुन्छ।' },
    options: [
      { id: 'walking', label: { en: 'Walking', np: 'हिँडेर' }, parts: { transport: 0 } },
      { id: 'bicycle', label: { en: 'Bicycle', np: 'साइकल' }, parts: { transport: 0 } },
      { id: 'electric', label: { en: 'Electric tempo/bus', np: 'विद्युतीय बस' }, parts: { transport: 0.01 } },
      { id: 'public', label: { en: 'Public diesel bus', np: 'सार्वजनिक बस' }, parts: { transport: 0.1 } },
      { id: 'own', label: { en: 'Own motorbike/car', np: 'आफ्नै गाडी' }, parts: { transport: 0 } }
    ]
  },
  {
    id: 'B2',
    category: { en: 'Transport', np: 'यातायात' },
    q: { en: 'Does your household own a motorbike or car? How far per week?', np: 'घरमा मोटरसाइकल वा गाडी छ? हप्तामा कति कि.मी.?' },
    story: { en: 'The roads we cross...', np: 'हामीले पार गर्ने बाटाहरू...' },
    fact: { en: 'Private cars contribute a huge portion of transport emissions compared to public transit.', np: 'सार्वजनिक यातायातको तुलनामा निजी गाडीले धेरै प्रदूषण गर्छन्।' },
    options: [
      { id: 'none', label: { en: 'No vehicle', np: 'छैन' }, parts: { transport: 0 } },
      { id: 'moto_under50', label: { en: 'Motorbike < 50 km', np: 'मोटरसाइकल < ५० किमी' }, parts: { transport: 0.15 } },
      { id: 'moto_50to150', label: { en: 'Motorbike 50-150 km', np: 'मोटरसाइकल ५०-१५० किमी' }, parts: { transport: 0.3 } },
      { id: 'car_under100', label: { en: 'Petrol car < 100 km', np: 'कार < १०० किमी' }, parts: { transport: 0.5 } },
      { id: 'car_100to300', label: { en: 'Petrol car 100-300 km', np: 'कार १००-३०० किमी' }, parts: { transport: 1.0 } }
    ]
  },
  {
    id: 'B3',
    category: { en: 'Transport', np: 'यातायात' },
    q: { en: 'How many domestic flights do you take per year within Nepal?', np: 'नेपालभित्र वार्षिक कति हवाई यात्रा गर्नुहुन्छ?' },
    story: { en: 'Above the clouds...', np: 'बादलहरू माथि...' },
    fact: { en: 'A short flight from Kathmandu to Pokhara produces about 50kg of CO2 per passenger.', np: 'काठमाडौँदेखि पोखरासम्मको छोटो उडानले प्रति यात्रु करिब ५० केजी कार्बन निकाल्छ।' },
    options: [
      { id: 'none', label: { en: 'None', np: 'कहिल्यै छैन' }, parts: { transport: 0 } },
      { id: '1to2', label: { en: '1-2 trips', np: '१-२ पटक' }, parts: { transport: 0.1 } },
      { id: '3to5', label: { en: '3-5 trips', np: '३-५ पटक' }, parts: { transport: 0.25 } },
      { id: '6plus', label: { en: '6+ trips', np: '६+ पटक' }, parts: { transport: 0.5 } }
    ]
  },
  {
    id: 'B4',
    category: { en: 'Transport', np: 'यातायात' },
    q: { en: 'How many international flights do you take per year?', np: 'अन्तर्राष्ट्रिय हवाई यात्रा वार्षिक कति छ?' },
    story: { en: 'Connecting to the wider world...', np: 'विशाल संसारसँग जोडिँदै...' },
    fact: { en: 'A single long-haul international flight can double a typical Nepali\'s annual carbon footprint.', np: 'एउटै लामो दूरीको अन्तर्राष्ट्रिय उडानले एक साधारण नेपालीको वार्षिक कार्बन छापलाई दोब्बर बनाउन सक्छ।' },
    options: [
      { id: 'none', label: { en: 'None', np: 'कहिल्यै छैन' }, parts: { transport: 0 } },
      { id: '1short', label: { en: '1 short-haul', np: '१ छोटो दूरी' }, parts: { transport: 0.2 } },
      { id: '1medium', label: { en: '1 medium-haul', np: '१ मध्यम दूरी' }, parts: { transport: 0.5 } },
      { id: '1long', label: { en: '1 long-haul', np: '१ लामो दूरी' }, parts: { transport: 1.0 } },
      { id: '2pluslong', label: { en: '2+ long-haul', np: '२+ लामो दूरी' }, parts: { transport: 2.0 } }
    ]
  },
  {
    id: 'B5',
    category: { en: 'Transport', np: 'यातायात' },
    q: { en: 'How often do you travel intercity by long-distance bus?', np: 'लामो दूरीको बस यात्रा वार्षिक कति पटक?' },
    story: { en: 'Journeying across the hills...', np: 'पहाडहरू हुँदै यात्रा...' },
    fact: { en: 'Taking a bus across the country is much more fuel efficient per person than taking a domestic flight.', np: 'देशभर बसमा यात्रा गर्नु हवाई उडानभन्दा धेरै इन्धन कुशल छ।' },
    options: [
      { id: 'rarely', label: { en: 'Rarely', np: 'कमै' }, parts: { transport: 0.05 } },
      { id: 'monthly', label: { en: 'Monthly', np: 'मासिक' }, parts: { transport: 0.15 } },
      { id: 'twicemonthly', label: { en: 'Twice monthly', np: 'महिनामा दुई पटक' }, parts: { transport: 0.3 } }
    ]
  },
  {
    id: 'C1',
    category: { en: 'Food', np: 'खाना' },
    q: { en: 'What best describes your diet?', np: 'तपाईंको खानपान कस्तो छ?' },
    story: { en: 'What we take from the land...', np: 'हामीले जमिनबाट के लिन्छौं...' },
    fact: { en: 'A vegetarian diet in Nepal has an incredibly low footprint. Mutton and buffalo require significantly more resources to produce.', np: 'नेपालमा शाकाहारी खानाको कार्बन छाप धेरै कम हुन्छ। खसी र राँगाको मासु उत्पादन गर्न धेरै स्रोत लाग्छ।' },
    options: [
      { id: 'veg', label: { en: 'Vegetarian', np: 'शाकाहारी' }, parts: { food: 0.15 } },
      { id: 'mostlyveg', label: { en: 'Mostly veg, some chicken/fish', np: 'प्रायः शाकाहारी' }, parts: { food: 0.3 } },
      { id: 'regularmeat', label: { en: 'Regular meat', np: 'नियमित मासु' }, parts: { food: 0.5 } },
      { id: 'frequentred', label: { en: 'Frequent red meat', np: 'धेरै रातो मासु' }, parts: { food: 0.8 } }
    ]
  },
  {
    id: 'C2',
    category: { en: 'Food', np: 'खाना' },
    q: { en: 'How often does your household eat buffalo or mutton?', np: 'घरमा राँगो/खसी-बोका कति पटक खाइन्छ?' },
    story: { en: 'Festivals and feasts...', np: 'चाडपर्व र भोजहरू...' },
    fact: { en: 'Red meat from ruminant animals produces methane, a powerful greenhouse gas.', np: 'रातो मासुले मिथेन उत्पादन गर्छ, जुन एक शक्तिशाली हरितगृह ग्यास हो।' },
    options: [
      { id: 'never', label: { en: 'Never', np: 'कहिल्यै छैन' }, parts: { food: 0 } },
      { id: 'occasionally', label: { en: 'Occasionally', np: 'कहिलेकाहीँ' }, parts: { food: 0.05 } },
      { id: 'monthly', label: { en: 'Monthly', np: 'मासिक' }, parts: { food: 0.15 } },
      { id: 'weekly', label: { en: 'Weekly', np: 'साप्ताहिक' }, parts: { food: 0.4 } }
    ]
  },
  {
    id: 'C3',
    category: { en: 'Food', np: 'खाना' },
    q: { en: 'How much food does your household waste per week?', np: 'हप्तामा घरमा कति खाना फालिन्छ?' },
    story: { en: 'Every grain counts...', np: 'हरेक दाना महत्त्वपूर्ण छ...' },
    fact: { en: 'Food rotting in a landfill creates methane. Composting it eliminates these emissions entirely!', np: 'फोहोरमा खाना कुहिँदा मिथेन बन्छ। यसलाई कम्पोस्ट बनाउँदा उत्सर्जन हुँदैन!' },
    options: [
      { id: 'almostnone', label: { en: 'Almost none', np: 'लगभग छैन' }, parts: { food: 0.01 } },
      { id: 'some', label: { en: 'Some', np: 'केही' }, parts: { food: 0.05 } },
      { id: 'moderate', label: { en: 'Moderate', np: 'मध्यम' }, parts: { food: 0.15 } },
      { id: 'alot', label: { en: 'A lot', np: 'धेरै' }, parts: { food: 0.25 } }
    ]
  },
  {
    id: 'C4',
    category: { en: 'Food', np: 'खाना' },
    q: { en: 'Where does most of your household’s food come from?', np: 'घरको अधिकांश खाना कहाँबाट आउँछ?' },
    story: { en: 'Food from our own soil...', np: 'आफ्नै माटोको खाना...' },
    fact: { en: 'Locally grown seasonal vegetables avoid the heavy emissions of long-distance transport and cold storage.', np: 'स्थानीय मौसमी तरकारीले लामो दूरीको ढुवानी र कोल्ड स्टोरेजको भारी उत्सर्जनलाई बचाउँछ।' },
    options: [
      { id: 'home', label: { en: 'Home garden / farm', np: 'आफ्नै खेत/बारी' }, parts: { food: -0.1 } },
      { id: 'local', label: { en: 'Local market', np: 'स्थानीय बजार' }, parts: { food: 0 } },
      { id: 'supermarket', label: { en: 'Supermarket', np: 'सुपरमार्केट' }, parts: { food: 0.1 } },
      { id: 'packaged', label: { en: 'Mostly packaged', np: 'प्रायः प्याक गरिएको' }, parts: { food: 0.2 } }
    ]
  },
  {
    id: 'C5',
    category: { en: 'Food', np: 'खाना' },
    q: { en: 'Does your household grow rice or crops with flooded fields?', np: 'घरमा धान खेती गर्नुहुन्छ?' },
    story: { en: 'The green paddies...', np: 'हरिया धानखेतहरू...' },
    fact: { en: 'Flooded rice paddies are a significant source of methane, though new farming techniques can reduce this.', np: 'पानी जमेको धानखेत मिथेनको ठूलो स्रोत हो।' },
    options: [
      { id: 'no', label: { en: 'No', np: 'होइन' }, parts: { food: 0 } },
      { id: 'small', label: { en: 'Small plot', np: 'सानो जग्गा' }, parts: { food: 0.05 } },
      { id: 'medium', label: { en: 'Medium', np: 'मध्यम' }, parts: { food: 0.15 } },
      { id: 'large', label: { en: 'Large', np: 'ठूलो' }, parts: { food: 0.3 } }
    ]
  },
  {
    id: 'C6',
    category: { en: 'Food', np: 'खाना' },
    q: { en: 'Does your household own livestock (cattle, buffalo, goat)?', np: 'घरमा पशुपालन गर्नुहुन्छ (गाई, राँगो, बाख्रा)?' },
    story: { en: 'Living with animals...', np: 'जनावरहरूसँग बस्दै...' },
    fact: { en: 'Cows and buffalo naturally produce methane as they digest grass.', np: 'गाई र राँगाले घाँस पचाउँदा स्वाभाविक रूपमा मिथेन उत्पादन गर्छन्।' },
    options: [
      { id: 'no', label: { en: 'No livestock', np: 'पशुपालन छैन' }, parts: { food: 0 } },
      { id: '1to2goats', label: { en: '1-2 goats/sheep', np: '१-२ बाख्रा/भेडा' }, parts: { food: 0.1 } },
      { id: '1cow', label: { en: '1 cow/buffalo', np: '१ गाई/भैंसी' }, parts: { food: 0.4 } },
      { id: '2pluscow', label: { en: '2+ cattle/buffalo', np: '२+ गाई/भैंसी' }, parts: { food: 0.8 } },
      { id: 'mixed', label: { en: 'Mixed herd', np: 'मिश्रित बथान' }, parts: { food: 1.2 } }
    ]
  },
  {
    id: 'D1',
    category: { en: 'Goods', np: 'सामान' },
    q: { en: 'How many new clothing items does your household buy per year?', np: 'घरमा वार्षिक कति नयाँ लुगा किन्नुहुन्छ?' },
    story: { en: 'The weight of our belongings...', np: 'हाम्रा सामानहरूको तौल...' },
    fact: { en: 'Manufacturing and shipping new clothes accounts for a massive hidden portion of global emissions.', np: 'नयाँ लुगा उत्पादन र ढुवानीले विश्वव्यापी उत्सर्जनको ठूलो लुकेको हिस्सा ओगटेको छ।' },
    options: [
      { id: '1to5', label: { en: '1-5 items', np: '१-५ लुगा' }, parts: { goods: 0.05 } },
      { id: '6to15', label: { en: '6-15 items', np: '६-१५ लुगा' }, parts: { goods: 0.15 } },
      { id: '16to30', label: { en: '16-30 items', np: '१६-३० लुगा' }, parts: { goods: 0.25 } },
      { id: '30plus', label: { en: '30+ items', np: '३०+ लुगा' }, parts: { goods: 0.4 } }
    ]
  },
  {
    id: 'D2',
    category: { en: 'Goods', np: 'सामान' },
    q: { en: 'Do you buy second-hand clothes or electronics?', np: 'पुरानो/सेकेन्डह्याण्ड सामान किन्नुहुन्छ?' },
    story: { en: 'Giving things a second life...', np: 'सामानलाई दोस्रो जीवन दिँदै...' },
    fact: { en: 'Buying second-hand avoids the entire manufacturing carbon footprint of that item!', np: 'सेकेन्डह्याण्ड किन्दा नयाँ उत्पादन गर्दा लाग्ने कार्बन छापबाट बच्न सकिन्छ!' },
    options: [
      { id: 'often', label: { en: 'Often', np: 'धेरैजसो' }, parts: { goods: -0.1 } },
      { id: 'sometimes', label: { en: 'Sometimes', np: 'कहिलेकाहीँ' }, parts: { goods: -0.05 } },
      { id: 'rarely', label: { en: 'Rarely', np: 'कमै' }, parts: { goods: 0 } },
      { id: 'never', label: { en: 'Never', np: 'कहिल्यै छैन' }, parts: { goods: 0 } }
    ]
  },
  {
    id: 'D3',
    category: { en: 'Goods', np: 'सामान' },
    q: { en: 'How often do you buy new electronics (phone, laptop, TV)?', np: 'नयाँ इलेक्ट्रोनिक सामान कति पटक किन्नुहुन्छ?' },
    story: { en: 'The digital footprint...', np: 'डिजिटल छाप...' },
    fact: { en: 'Manufacturing a single laptop produces over 300kg of CO2!', np: 'एउटा ल्यापटप बनाउँदा ३०० केजीभन्दा बढी कार्बन निस्कन्छ!' },
    options: [
      { id: 'rarely', label: { en: 'Every 5+ years', np: '५+ वर्षमा' }, parts: { goods: 0.05 } },
      { id: 'every3', label: { en: 'Every 3 years', np: '३ वर्षमा' }, parts: { goods: 0.1 } },
      { id: 'every2', label: { en: 'Every 2 years', np: '२ वर्षमा' }, parts: { goods: 0.15 } },
      { id: 'every1', label: { en: 'Every year', np: 'हरेक वर्ष' }, parts: { goods: 0.25 } }
    ]
  },
  {
    id: 'D4',
    category: { en: 'Goods', np: 'सामान' },
    q: { en: 'How much single-use plastic does your household use weekly?', np: 'हप्तामा कति एकल प्रयोगको प्लास्टिक प्रयोग गर्नुहुन्छ?' },
    story: { en: 'The things we throw away...', np: 'हामीले फाल्ने कुराहरू...' },
    fact: { en: 'Most plastic is made from fossil fuels, contributing to climate change from its creation to its disposal.', np: 'धेरैजसो प्लास्टिक जीवाश्म इन्धनबाट बन्छ, जसले जलवायु परिवर्तनमा योगदान पुर्याउँछ।' },
    options: [
      { id: 'verylittle', label: { en: 'Very little', np: 'धेरै कम' }, parts: { goods: 0.02 } },
      { id: 'some', label: { en: 'Some', np: 'केही' }, parts: { goods: 0.05 } },
      { id: 'moderate', label: { en: 'Moderate', np: 'मध्यम' }, parts: { goods: 0.1 } },
      { id: 'alot', label: { en: 'A lot', np: 'धेरै' }, parts: { goods: 0.15 } }
    ]
  },
  {
    id: 'E1',
    category: { en: 'Waste', np: 'फोहोर' },
    q: { en: 'How does your household manage solid waste?', np: 'घरको फोहोर कसरी व्यवस्थापन गर्नुहुन्छ?' },
    story: { en: 'Where does it go?', np: 'यो कहाँ जान्छ?' },
    fact: { en: 'Open burning of waste releases extremely toxic chemicals alongside greenhouse gases.', np: 'फोहोर जलाउँदा हरितगृह ग्याससँगै धेरै विषालु रसायनहरू निस्कन्छन्।' },
    options: [
      { id: 'compost', label: { en: 'Compost & Recycle', np: 'कम्पोस्ट र रिसाइकल' }, parts: { goods: 0.02 } },
      { id: 'municipal', label: { en: 'Municipal collection', np: 'नगरपालिका संकलन' }, parts: { goods: 0.08 } },
      { id: 'dump', label: { en: 'Open dumping', np: 'खुल्ला फाल्ने' }, parts: { goods: 0.1 } },
      { id: 'burn', label: { en: 'Open burning', np: 'खुल्ला जलाउने' }, parts: { goods: 0.2 } }
    ]
  },
  {
    id: 'E2',
    category: { en: 'Waste', np: 'फोहोर' },
    q: { en: 'Do you openly burn household trash or plastic?', np: 'घरमा फोहोर वा प्लास्टिक जलाउनुहुन्छ?' },
    story: { en: 'The darkest smoke...', np: 'सबैभन्दा कालो धुवाँ...' },
    fact: { en: 'Burning plastic in the open releases dioxins, which are highly harmful to both the climate and your health.', np: 'प्लास्टिक जलाउँदा डाइअक्सिन निस्कन्छ, जुन स्वास्थ्य र जलवायु दुवैका लागि हानिकारक छ।' },
    options: [
      { id: 'never', label: { en: 'Never', np: 'कहिल्यै छैन' }, parts: { goods: 0 } },
      { id: 'occasionally', label: { en: 'Occasionally', np: 'कहिलेकाहीँ' }, parts: { goods: 0.05 } },
      { id: 'regularly', label: { en: 'Regularly', np: 'नियमित' }, parts: { goods: 0.15 } }
    ]
  },
  {
    id: 'E3',
    category: { en: 'Waste', np: 'फोहोर' },
    q: { en: 'Does your household have a toilet / sanitation system?', np: 'घरमा शौचालय छ?' },
    story: { en: 'Clean living...', np: 'सफा जीवन...' },
    fact: { en: 'Septic tanks, without proper ventilation and treatment, naturally emit methane.', np: 'सेप्टिक ट्याङ्कले स्वाभाविक रूपमा मिथेन उत्सर्जन गर्छन्।' },
    options: [
      { id: 'flush', label: { en: 'Flush to sewage', np: 'ढलमा जोडिएको' }, parts: { goods: 0.03 } },
      { id: 'septic', label: { en: 'Septic tank', np: 'सेप्टिक ट्याङ्क' }, parts: { goods: 0.08 } },
      { id: 'pit', label: { en: 'Pit latrine', np: 'खाल्डे चर्पी' }, parts: { goods: 0.04 } },
      { id: 'open', label: { en: 'Open defecation', np: 'खुल्ला शौच' }, parts: { goods: 0.02 } }
    ]
  },
  {
    id: 'E4',
    category: { en: 'Waste', np: 'फोहोर' },
    q: { en: 'How long is your average daily shower / bathing water use?', np: 'दैनिक नुहाउनको लागि कति समय लाग्छ?' },
    story: { en: 'Every drop counts...', np: 'हरेक थोपा महत्त्वपूर्ण छ...' },
    fact: { en: 'Water requires energy to pump, treat, and heat. Using less hot water saves both energy and money!', np: 'पानी तान्न र तताउन ऊर्जा लाग्छ।' },
    options: [
      { id: 'bucket', label: { en: 'Bucket bath', np: 'बाल्टी नुहाउने' }, parts: { goods: 0.01 } },
      { id: 'short', label: { en: 'Short shower (5m)', np: 'छोटो सावर' }, parts: { goods: 0.02 } },
      { id: 'medium', label: { en: 'Medium (10m)', np: 'मध्यम' }, parts: { goods: 0.04 } },
      { id: 'long', label: { en: 'Long (15m+)', np: 'लामो' }, parts: { goods: 0.06 } }
    ]
  },
  {
    id: 'F1',
    category: { en: 'Digital', np: 'डिजिटल' },
    q: { en: 'How many hours per day do you stream video (YouTube, TikTok, Netflix)?', np: 'दिनमा कति घण्टा भिडियो हेर्नुहुन्छ?' },
    story: { en: 'The unseen data...', np: 'नदेखिने डाटा...' },
    fact: { en: 'Data centers use massive amounts of energy to deliver videos to your phone.', np: 'तपाईंको फोनमा भिडियो पठाउन डाटा सेन्टरहरूले धेरै ऊर्जा खपत गर्छन्।' },
    options: [
      { id: 'under30', label: { en: '< 30 min', np: '< ३० मिनेट' }, parts: { goods: 0.01 } },
      { id: '1to2', label: { en: '1-2 hours', np: '१-२ घण्टा' }, parts: { goods: 0.02 } },
      { id: '3to4', label: { en: '3-4 hours', np: '३-४ घण्टा' }, parts: { goods: 0.04 } },
      { id: '5plus', label: { en: '5+ hours', np: '५+ घण्टा' }, parts: { goods: 0.06 } }
    ]
  },
  {
    id: 'F2',
    category: { en: 'Digital', np: 'डिजिटल' },
    q: { en: 'How often do you use AI tools like ChatGPT or Gemini?', np: 'AI उपकरण कति प्रयोग गर्नुहुन्छ?' },
    story: { en: 'The power of thought...', np: 'सोचको शक्ति...' },
    fact: { en: 'Generating a response from a large AI uses about 4-5 times more energy than a simple Google search.', np: 'AI ले गुगल सर्चभन्दा ४-५ गुणा बढी ऊर्जा प्रयोग गर्छ।' },
    options: [
      { id: 'never', label: { en: 'Never', np: 'कहिल्यै छैन' }, parts: { goods: 0 } },
      { id: 'occasionally', label: { en: 'Occasionally', np: 'कहिलेकाहीँ' }, parts: { goods: 0.01 } },
      { id: 'regularly', label: { en: 'Regularly', np: 'नियमित' }, parts: { goods: 0.02 } },
      { id: 'heavy', label: { en: 'Heavy user', np: 'धेरै प्रयोगकर्ता' }, parts: { goods: 0.04 } }
    ]
  },
  {
    id: 'F3',
    category: { en: 'Digital', np: 'डिजिटल' },
    q: { en: 'How many devices does your household own (phones, laptops, TVs)?', np: 'घरमा कति डिजिटल उपकरण छन्?' },
    story: { en: 'Screens around us...', np: 'हाम्रो वरिपरि स्क्रिनहरू...' },
    fact: { en: 'The manufacturing phase of a smartphone produces up to 80% of its entire lifetime emissions.', np: 'स्मार्टफोनको कुल उत्सर्जनको ८०% उत्पादनमै हुन्छ।' },
    options: [
      { id: '1to2', label: { en: '1-2 devices', np: '१-२ उपकरण' }, parts: { goods: 0.02 } },
      { id: '3to4', label: { en: '3-4 devices', np: '३-४ उपकरण' }, parts: { goods: 0.05 } },
      { id: '5to7', label: { en: '5-7 devices', np: '५-७ उपकरण' }, parts: { goods: 0.1 } },
      { id: '8plus', label: { en: '8+ devices', np: '८+ उपकरण' }, parts: { goods: 0.15 } }
    ]
  },
  {
    id: 'F4',
    category: { en: 'Digital', np: 'डिजिटल' },
    q: { en: 'How much mobile data does your household use per month?', np: 'महिनामा कति मोबाइल डाटा खर्च हुन्छ?' },
    story: { en: 'Invisible connections...', np: 'अदृश्य जडानहरू...' },
    fact: { en: 'Mobile networks use more energy per gigabyte transferred than fixed-line broadband.', np: 'मोबाइल नेटवर्कले ब्रोडब्यान्डभन्दा बढी ऊर्जा प्रयोग गर्छ।' },
    options: [
      { id: 'under2', label: { en: '< 2 GB', np: '< २ GB' }, parts: { goods: 0.01 } },
      { id: '2to10', label: { en: '2-10 GB', np: '२-१० GB' }, parts: { goods: 0.02 } },
      { id: '10to30', label: { en: '10-30 GB', np: '१०-३० GB' }, parts: { goods: 0.04 } },
      { id: '30plus', label: { en: '30+ GB', np: '३०+ GB' }, parts: { goods: 0.08 } }
    ]
  }
];
