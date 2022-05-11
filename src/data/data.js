export default {
  personalData: {
    name: 'Therese Selemba',
    title: 'Butiksbiträde',
    contacts: [
      { type: 'email', value: 'therese.hbg@gmail.com' },
      { type: 'phone', value: '0707345942' },

      {
        type: 'location',
        value: {
          city: 'Helsingborg',
          address: 'Lägervägen',
          nr: '23A',
          zip: '25456',
          url: 'https://www.google.se/maps/place/',
        },
      },
      {
        type: 'linkedin',
        value: 'linkedin.com/in/therese-selemba',
      },
    ],
  },
  sections: [
    {
      title: 'Karriärprofil',
      content:
        'Har 12års erfarenhet av butik. Och jobbat bla. på Åhlens, kicks och Ags Favör livsmedelsbutik, kassörska. Är en väldigt nyfiken och driven person som i 8 år har varit butiksansvarig av en grossistbutik inom frisörbranschen. Detta har gett mig en förståelse för butiksjobb, kundhantering, order/lagerhållning samt webbförsäljning. Mitt mål var att ständigt erbjuda bra service, hålla en personlig kontakt och göra kunderna nöjda. Är noggrann, trevlig, och en driven säljare som brinner för service och mötet med kunden. Jobbar för tillfället som Receptionist för Helsingborg stad, men söker fler timmar.',
      icon: 'usertie',
    },
    {
      title: 'Utbildning',
      icon: 'graduation',
      items: [
        {
          title: 'GYMNASIESKOLA BAGERI',
          authority: 'VIRGINSKASKOLAN - ÖREBRO',
          rightSide: '1995 - 1999',
        },
        {
          title: 'GRUNDSKOLA',
          authority: 'PÅARPS SKOLA',
          rightSide: '1984 - 1995',
        },
      ],
    },
    {
      title: 'Arbetslivserfarenhet',
      icon: 'archive',
      items: [
        {
          title: 'Butiksbiträde',
          company: 'Blomsterboda - Ica Maxi Berga',
          datesBetween: '2022 - Nuvarande',
          descriptionTags: [
            'Blommor',
            'Krukor',
            'Tillbehör',
          ],
        },
        {
          title: 'Receptionist',
          company: 'Helsingborgs Stad',
          datesBetween: '2020 - 2020',
          descriptionTags: [
            'Assistent',
            'Fritid',
            'Bokningar',
          ],
        },
        {
          title: 'Ägare / Butiksansvarig',
          company: 'Lemé Frisörgrossist AB',
          datesBetween: '2005 - 2017',
          descriptionTags: [
            'Hårfärg',
            'Saxar',
            'Schampo',
            'Hårfön',
          ],
        },
        {
          title: 'Butiksbiträde',
          company: 'Kicks Väla Helsingborg',
          datesBetween: '2004',
          descriptionTags: [
            'Skönhet',
            'Smink',
            'Parfym',
            'Kroppsvård',
          ],
        },
        {
          title: 'Butiksbiträde',
          company: 'Åhlens City Helsingborg',
          datesBetween: '2003 - 2004',
          descriptionTags: [
            'Mode',
            'Inredning',
            'Skönhet',
            'Leksaker',
          ],
        },
        {
          title: 'Paketerare',
          company: 'Pfizer, Adecco',
          datesBetween: '2003',
          descriptionTags: [
            'Paket',
            'Produktion',
            'Läkemedel',
          ],
        },
        {
          title: 'Kassörska',
          company: 'AG:s favör',
          datesBetween: '2002',
          descriptionTags: [
            'Livsmedel',
            'Detaljhandel',
          ],
        },
        {
          title: 'Konditor',
          company: 'Gunnar Bröd Förslöv',
          datesBetween: '2001',
          descriptionTags: [
            'Bageri',
            'Konditori',
          ],
        },
        {
          title: 'Brevbärare',
          company: 'Posten Helsingborg',
          datesBetween: '2000',
          descriptionTags: [
            'Brevbärare',
          ],
        },
        {
          title: 'Paketerare / Maskinskötare',
          company: 'Korvbrödsbagaren Örebro',
          datesBetween: '1999 - 2000',
          descriptionTags: [
            'Tillverkning',
            'Bageri',
            'Produktion',
          ],
        },
      ],
    },
    {
      title: 'Referenser',
      groups: [
        {
          sectionHeader: 'Jobbklar',
          description: 'Rekrytering',
          items: [
            {
              name: 'Matz Törnqvist',
              title: 'Rekryteringskonstult',
              url: 'https://www.jobbklar.se',
              linkedin: 'https://www.linkedin.com/in/matz-törnqvist-40143555',
              email: 'matz.tornqvist@gmail.com',
            },
          ],
        },
      ],
    },
    {
      title: 'Språk',
      icon: 'language',
      items: ['Svenska', 'Engelska'],
    },
    {
      type: 'tag-list',
      title: 'Färdigheter',
      icon: 'rocket',
      items: [
        'Photoshop',
        'Illustrator',
        'Office',
        'Visma',
        'Körkort - B',
        'Vanderbilt',
        'Salto',
        'FRI',
      ],
    },
    {
      title: 'Hobbys & Intressen',
      icon: 'cubes',
      items: ['Teknik', 'Film/Serier', 'Trädgård', 'Familj/Vänner'],
    },
    {
      skills:[
        {
          str: 'ANSVARSTAGANDE',
          procent: '85%' 
        },
        {
          str: 'INITIATIVTAGANDE',
          procent: '80%' 
        },
        {
          str: 'SAMARBETSVILLIG',
          procent: '90%' 
        },
        {
          str: 'KUNDKONTAKT',
          procent: '95%' 
        }
      ],
    }
  ],
};
