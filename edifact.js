export default [{id:0,label:'edifact',children:[{id:1,label:'UNH',mandatory:'M',shortDesc:'MESSAGE HEADER',desc:'A service segment starting and uniquely identifying a message. The message type code for the Purchase order message is ORDERS.',repeat:1,length:'',type:'',level:1,children:[
	{id:10,label:'0062',mandatory:'M',shortDesc:'MESSAGE REFERENCE NUMBER',desc:'Unique message reference assigned by the sender.',repeat:1,length:'0..14',type:'an',level:2,children:[]},
	{id:11,label:'S009',mandatory:'M',shortDesc:'MESSAGE IDENTIFIER',desc:'Identification of the type, version, etc. of the message being interchanged.',repeat:1,length:'',type:'',level:2,children:[
		{id:110,label:'0065',mandatory:'M',shortDesc:'Message type',desc:'Code identifying a type of message and assigned by its controlling agency.',repeat:1,length:'0..6',type:'an',level:3,children:[]},
		{id:111,label:'0052',mandatory:'M',shortDesc:'Message version number',desc:'Version number of a message type.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:112,label:'0054',mandatory:'M',shortDesc:'Message release number',desc:'Release number within the current message version number.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:113,label:'0051',mandatory:'M',shortDesc:'Controlling agency, coded',desc:'Code identifying a controlling agency.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:114,label:'0057',mandatory:'C',shortDesc:'Association assigned code',desc:'Code, assigned by the association responsible for the design and maintenance of the message type concerned, which further identifies the message.',repeat:1,length:'0..6',type:'an',level:3,children:[]},
		{id:115,label:'0110',mandatory:'C',shortDesc:'Code list directory version number',desc:'Version number of the code list directory.',repeat:1,length:'0..6',type:'an',level:3,children:[]},
		{id:116,label:'0113',mandatory:'C',shortDesc:'Message type sub-function identification',desc:'Code identifying a sub-function of a message type.',repeat:1,length:'0..6',type:'an',level:3,children:[]}]},
	{id:12,label:'0068',mandatory:'C',shortDesc:'COMMON ACCESS REFERENCE',desc:'Reference serving as a key to relate all subsequent transfers of data to the same business case or file.',repeat:1,length:'0..35',type:'an',level:2,children:[]},
	{id:13,label:'S010',mandatory:'C',shortDesc:'STATUS OF THE TRANSFER',desc:'Statement that the message is one in a sequence of transfers relating to the same topic.',repeat:1,length:'',type:'',level:2,children:[
		{id:130,label:'0070',mandatory:'M',shortDesc:'Sequence of transfers',desc:'Number assigned by the sender indicating the transfer sequence of a message related to the same topic. The message could be an addition or a change to an earlier transfer related to the same topic.',repeat:1,length:'0..2',type:'n',level:3,children:[]},
		{id:131,label:'0073',mandatory:'C',shortDesc:'First and last transfer',desc:'Indication used for the first and last message in a sequence of messages related to the same topic.',repeat:1,length:'1',type:'a',level:3,children:[]}]},
	{id:14,label:'S016',mandatory:'C',shortDesc:'MESSAGE SUBSET IDENTIFICATION',desc:'Identification of a message subset by its identifier, version, release and source.',repeat:1,length:'',type:'',level:2,children:[
		{id:140,label:'0115',mandatory:'M',shortDesc:'Message subset identification',desc:'Coded identification of a message subset, assigned by its controlling agency.',repeat:1,length:'0..14',type:'an',level:3,children:[]},
		{id:141,label:'0116',mandatory:'C',shortDesc:'Message subset version number',desc:'Version number of the message subset.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:142,label:'0118',mandatory:'C',shortDesc:'Message subset release number',desc:'Release number within the message subset version number.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:143,label:'0051',mandatory:'C',shortDesc:'Controlling agency, coded',desc:'Code identifying a controlling agency.',repeat:1,length:'0..3',type:'an',level:3,children:[]}]},
	{id:15,label:'S017',mandatory:'C',shortDesc:'MESSAGE IMPLEMENTATION GUIDELINE IDENTIFICATION',desc:'Identification of a message implementation guideline by its identifier, version, release and source.',repeat:1,length:'',type:'',level:2,children:[
		{id:150,label:'0121',mandatory:'M',shortDesc:'Message implementation guideline identification',desc:'Coded identification of the message implementation guideline, assigned by its controlling agency.',repeat:1,length:'0..14',type:'an',level:3,children:[]},
		{id:151,label:'0122',mandatory:'C',shortDesc:'Message implementation guideline version number',desc:'Version number of the message implementation guideline.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:152,label:'0124',mandatory:'C',shortDesc:'Message implementation guideline release number',desc:'Release number within the message implementation guideline version number.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:153,label:'0051',mandatory:'C',shortDesc:'Controlling agency, coded',desc:'Code identifying a controlling agency.',repeat:1,length:'0..3',type:'an',level:3,children:[]}]},
	{id:16,label:'S018',mandatory:'C',shortDesc:'SCENARIO IDENTIFICATION',desc:'Identification of a scenario.',repeat:1,length:'',type:'',level:2,children:[
		{id:160,label:'0127',mandatory:'M',shortDesc:'Scenario identification',desc:'Code identifying scenario.',repeat:1,length:'0..14',type:'an',level:3,children:[]},
		{id:161,label:'0128',mandatory:'C',shortDesc:'Scenario version number',desc:'Version number of a scenario.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:162,label:'0130',mandatory:'C',shortDesc:'Scenario release number',desc:'Release number within the scenario version number.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:163,label:'0051',mandatory:'C',shortDesc:'Controlling agency, coded',desc:'Code identifying a controlling agency.',repeat:1,length:'0..3',type:'an',level:3,children:[]}]}]},
{id:2,label:'BGM',mandatory:'M',shortDesc:'BEGINNING OF MESSAGE',desc:'A segment by which the sender must uniquely identify the order by means of its name and number and when necessary its function.',repeat:1,length:'',type:'',level:1,children:[
	{id:20,label:'C002',mandatory:'C',shortDesc:'DOCUMENT/MESSAGE NAME',desc:'Identification of a type of document/message by code or name. Code preferred.',repeat:1,length:'',type:'',level:2,children:[
		{id:200,label:'1001',mandatory:'C',shortDesc:'Document name code',desc:'Code specifying the document name.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:201,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:3,children:[]},
		{id:202,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:203,label:'1000',mandatory:'C',shortDesc:'Document name',desc:'Name of a document.',repeat:1,length:'0..35',type:'an',level:3,children:[]}]},
	{id:21,label:'C106',mandatory:'C',shortDesc:'DOCUMENT/MESSAGE IDENTIFICATION',desc:'Identification of a document/message by its number and eventually its version or revision.',repeat:1,length:'',type:'',level:2,children:[
		{id:210,label:'1004',mandatory:'C',shortDesc:'Document identifier',desc:'To identify a document.',repeat:1,length:'0..70',type:'an',level:3,children:[]},
		{id:211,label:'1056',mandatory:'C',shortDesc:'Version identifier',desc:'To identify a version.',repeat:1,length:'0..9',type:'an',level:3,children:[]},
		{id:212,label:'1060',mandatory:'C',shortDesc:'Revision identifier',desc:'To identify a revision.',repeat:1,length:'0..6',type:'an',level:3,children:[]}]},
	{id:22,label:'1225',mandatory:'C',shortDesc:'MESSAGE FUNCTION CODE',desc:'Code indicating the function of the message.',repeat:1,length:'0..3',type:'an',level:2,children:[]},
	{id:23,label:'4343',mandatory:'C',shortDesc:'RESPONSE TYPE CODE',desc:'Code specifying the type of acknowledgment required or transmitted.',repeat:1,length:'0..3',type:'an',level:2,children:[]}]},
{id:3,label:'DTM',mandatory:'M',shortDesc:'DATE/TIME/PERIOD',desc:'A segment specifying general dates and, when relevant, times related to the whole message. The segment must be specified at least once to identify the order date. Examples of the use of this DTM segment are: Lead times that apply to the whole of the Order and, if no schedule is to be specified, the delivery date. The Date/time/period segment within other Segment group should be used whenever the date/time/period requires to be logically related to another specified data item. e.g. Payment due date is specified within the PYT Segment group.',repeat:35,length:'',type:'',level:1,children:[
	{id:30,label:'C507',mandatory:'M',shortDesc:'DATE/TIME/PERIOD',desc:'Date and/or time, or period relevant to the specified date/time/period type.',repeat:1,length:'',type:'',level:2,children:[
		{id:300,label:'2005',mandatory:'M',shortDesc:'Date or time or period function code qualifier',desc:'Code qualifying the function of a date, time or period.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:301,label:'2380',mandatory:'C',shortDesc:'Date or time or period text',desc:'The value of a date, a date and time, a time or of a period in a specified representation.',repeat:1,length:'0..35',type:'an',level:3,children:[]},
		{id:302,label:'2379',mandatory:'C',shortDesc:'Date or time or period format code',desc:'Code specifying the representation of a date, time or period.',repeat:1,length:'0..3',type:'an',level:3,children:[]}]}]},
{id:4,label:'PAI',mandatory:'C',shortDesc:'PAYMENT INSTRUCTIONS',desc:'A segment requesting or confirming conditions of payment, guarantee and method of payment for the whole order. An example of the use of this segment is to specify that a documentary credit will be used.',repeat:1,length:'',type:'',level:1,children:[
	{id:40,label:'C534',mandatory:'M',shortDesc:'PAYMENT INSTRUCTION DETAILS',desc:'Indication of method of payment employed or to be employed.',repeat:1,length:'',type:'',level:2,children:[
		{id:400,label:'4439',mandatory:'C',shortDesc:'Payment conditions code',desc:'Code specifying the payment conditions.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:401,label:'4431',mandatory:'C',shortDesc:'Payment guarantee means code',desc:'Code specifying the means of payment guarantee.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:402,label:'4461',mandatory:'C',shortDesc:'Payment means code',desc:'Code identifying a means of payment.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:403,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:3,children:[]},
		{id:404,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:405,label:'4435',mandatory:'C',shortDesc:'Payment channel code',desc:'Code specifying the payment channel.',repeat:1,length:'0..3',type:'an',level:3,children:[]}]}]},
{id:5,label:'ALI',mandatory:'C',shortDesc:'ADDITIONAL INFORMATION',desc:'A segment indicating special conditions related to the total order owing to origin, customs preference or other commercial factors.',repeat:5,length:'',type:'',level:1,children:[
	{id:50,label:'3239',mandatory:'C',shortDesc:'COUNTRY OF ORIGIN IDENTIFIER',desc:'To identify the country in which the goods have been produced or manufactured, according to criteria laid down for the application of the Customs tariff or quantitative restrictions, or any measure related to trade.',repeat:1,length:'0..3',type:'an',level:2,children:[]},
	{id:51,label:'9213',mandatory:'C',shortDesc:'DUTY REGIME TYPE CODE',desc:'Code specifying a type of duty regime.',repeat:1,length:'0..3',type:'an',level:2,children:[]},
	{id:52,label:'4183',mandatory:'C',shortDesc:'SPECIAL CONDITION CODE',desc:'Code specifying a special condition.',repeat:1,length:'0..3',type:'an',level:2,children:[]},
	{id:53,label:'4183',mandatory:'C',shortDesc:'SPECIAL CONDITION CODE',desc:'Code specifying a special condition.',repeat:1,length:'0..3',type:'an',level:2,children:[]},
	{id:54,label:'4183',mandatory:'C',shortDesc:'SPECIAL CONDITION CODE',desc:'Code specifying a special condition.',repeat:1,length:'0..3',type:'an',level:2,children:[]},
	{id:55,label:'4183',mandatory:'C',shortDesc:'SPECIAL CONDITION CODE',desc:'Code specifying a special condition.',repeat:1,length:'0..3',type:'an',level:2,children:[]},
	{id:56,label:'4183',mandatory:'C',shortDesc:'SPECIAL CONDITION CODE',desc:'Code specifying a special condition.',repeat:1,length:'0..3',type:'an',level:2,children:[]}]},
{id:6,label:'IMD',mandatory:'C',shortDesc:'ITEM DESCRIPTION',desc:'A segment providing a description common to all line items of the order.',repeat:999,length:'',type:'',level:1,children:[
	{id:60,label:'7077',mandatory:'C',shortDesc:'DESCRIPTION FORMAT CODE',desc:'Code specifying the format of a description.',repeat:1,length:'0..3',type:'an',level:2,children:[]},
	{id:61,label:'C272',mandatory:'C',shortDesc:'ITEM CHARACTERISTIC',desc:'To provide the characteristic of the item being described.',repeat:1,length:'',type:'',level:2,children:[
		{id:610,label:'7081',mandatory:'C',shortDesc:'Item characteristic code',desc:'Code specifying the characteristic of an item.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:611,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:3,children:[]},
		{id:612,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:3,children:[]}]},
	{id:62,label:'C273',mandatory:'C',shortDesc:'ITEM DESCRIPTION',desc:'Description of an item.',repeat:1,length:'',type:'',level:2,children:[
		{id:620,label:'7009',mandatory:'C',shortDesc:'Item description code',desc:'Code specifying an item.',repeat:1,length:'0..17',type:'an',level:3,children:[]},
		{id:621,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:3,children:[]},
		{id:622,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:623,label:'7008',mandatory:'C',shortDesc:'Item description',desc:'Free form description of an item.',repeat:1,length:'0..256',type:'an',level:3,children:[]},
		{id:624,label:'7008',mandatory:'C',shortDesc:'Item description',desc:'Free form description of an item.',repeat:1,length:'0..256',type:'an',level:3,children:[]},
		{id:625,label:'3453',mandatory:'C',shortDesc:'Language name code',desc:'Code specifying the language name.',repeat:1,length:'0..3',type:'an',level:3,children:[]}]},
	{id:63,label:'7383',mandatory:'C',shortDesc:'SURFACE OR LAYER CODE',desc:'Code specifying the surface or layer of an object.',repeat:1,length:'0..3',type:'an',level:2,children:[]}]},
{id:7,label:'FTX',mandatory:'C',shortDesc:'FREE TEXT',desc:'A segment with free text information, in coded or clear form, used when additional information is needed but cannot be accommodated within other segments. In computer to computer exchanges such text will normally require the receiver to process this segment manually.',repeat:99,length:'',type:'',level:1,children:[
	{id:70,label:'4451',mandatory:'M',shortDesc:'TEXT SUBJECT CODE QUALIFIER',desc:'Code qualifying the subject of the text.',repeat:1,length:'0..3',type:'an',level:2,children:[]},
	{id:71,label:'4453',mandatory:'C',shortDesc:'FREE TEXT FUNCTION CODE',desc:'Code specifying the function of free text.',repeat:1,length:'0..3',type:'an',level:2,children:[]},
	{id:72,label:'C107',mandatory:'C',shortDesc:'TEXT REFERENCE',desc:'Coded reference to a standard text and its source.',repeat:1,length:'',type:'',level:2,children:[
		{id:720,label:'4441',mandatory:'M',shortDesc:'Free text description code',desc:'Code specifying free form text.',repeat:1,length:'0..17',type:'an',level:3,children:[]},
		{id:721,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:3,children:[]},
		{id:722,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:3,children:[]}]},
	{id:73,label:'C108',mandatory:'C',shortDesc:'TEXT LITERAL',desc:'Free text; one to five lines.',repeat:1,length:'',type:'',level:2,children:[
		{id:730,label:'4440',mandatory:'M',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:3,children:[]},
		{id:731,label:'4440',mandatory:'C',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:3,children:[]},
		{id:732,label:'4440',mandatory:'C',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:3,children:[]},
		{id:733,label:'4440',mandatory:'C',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:3,children:[]},
		{id:734,label:'4440',mandatory:'C',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:3,children:[]}]},
	{id:74,label:'3453',mandatory:'C',shortDesc:'LANGUAGE NAME CODE',desc:'Code specifying the language name.',repeat:1,length:'0..3',type:'an',level:2,children:[]},
	{id:75,label:'4447',mandatory:'C',shortDesc:'FREE TEXT FORMAT CODE',desc:'Code specifying the format of free text.',repeat:1,length:'0..3',type:'an',level:2,children:[]}]},
{id:8,label:'GIR',mandatory:'C',shortDesc:'RELATED IDENTIFICATION NUMBERS',desc:'A segment providing related identification numbers common to all line items.',repeat:10,length:'',type:'',level:1,children:[
	{id:80,label:'7297',mandatory:'M',shortDesc:'SET TYPE CODE QUALIFIER',desc:'Code qualifying the type of set.',repeat:1,length:'0..3',type:'an',level:2,children:[]},
	{id:81,label:'C206',mandatory:'M',shortDesc:'IDENTIFICATION NUMBER',desc:'The identification of an object.',repeat:1,length:'',type:'',level:2,children:[
		{id:810,label:'7402',mandatory:'M',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:3,children:[]},
		{id:811,label:'7405',mandatory:'C',shortDesc:'Object identification code qualifier',desc:'Code qualifying the identification of an object.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:812,label:'4405',mandatory:'C',shortDesc:'Status description code',desc:'Code specifying a status.',repeat:1,length:'0..3',type:'an',level:3,children:[]}]},
	{id:82,label:'C206',mandatory:'C',shortDesc:'IDENTIFICATION NUMBER',desc:'The identification of an object.',repeat:1,length:'',type:'',level:2,children:[
		{id:820,label:'7402',mandatory:'M',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:3,children:[]},
		{id:821,label:'7405',mandatory:'C',shortDesc:'Object identification code qualifier',desc:'Code qualifying the identification of an object.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:822,label:'4405',mandatory:'C',shortDesc:'Status description code',desc:'Code specifying a status.',repeat:1,length:'0..3',type:'an',level:3,children:[]}]},
	{id:83,label:'C206',mandatory:'C',shortDesc:'IDENTIFICATION NUMBER',desc:'The identification of an object.',repeat:1,length:'',type:'',level:2,children:[
		{id:830,label:'7402',mandatory:'M',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:3,children:[]},
		{id:831,label:'7405',mandatory:'C',shortDesc:'Object identification code qualifier',desc:'Code qualifying the identification of an object.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:832,label:'4405',mandatory:'C',shortDesc:'Status description code',desc:'Code specifying a status.',repeat:1,length:'0..3',type:'an',level:3,children:[]}]},
	{id:84,label:'C206',mandatory:'C',shortDesc:'IDENTIFICATION NUMBER',desc:'The identification of an object.',repeat:1,length:'',type:'',level:2,children:[
		{id:840,label:'7402',mandatory:'M',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:3,children:[]},
		{id:841,label:'7405',mandatory:'C',shortDesc:'Object identification code qualifier',desc:'Code qualifying the identification of an object.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:842,label:'4405',mandatory:'C',shortDesc:'Status description code',desc:'Code specifying a status.',repeat:1,length:'0..3',type:'an',level:3,children:[]}]},
	{id:85,label:'C206',mandatory:'C',shortDesc:'IDENTIFICATION NUMBER',desc:'The identification of an object.',repeat:1,length:'',type:'',level:2,children:[
		{id:850,label:'7402',mandatory:'M',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:3,children:[]},
		{id:851,label:'7405',mandatory:'C',shortDesc:'Object identification code qualifier',desc:'Code qualifying the identification of an object.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:852,label:'4405',mandatory:'C',shortDesc:'Status description code',desc:'Code specifying a status.',repeat:1,length:'0..3',type:'an',level:3,children:[]}]}]},
{id:9,label:'GRP1',mandatory:'C',shortDesc:'RFF#DTM#',desc:'A group of segments for giving references and where necessary, their dates, relating to the whole message e.g. contract number, import/export license number, reservation number.',repeat:9999,length:'',type:'',level:1,children:[
	{id:90,label:'RFF',mandatory:'M',shortDesc:'REFERENCE',desc:'A segment identifying the reference by its number and where appropriate a line number within a document.',repeat:1,length:'',type:'',level:2,children:[
		{id:900,label:'C506',mandatory:'M',shortDesc:'REFERENCE',desc:'Identification of a reference.',repeat:1,length:'',type:'',level:3,children:[
			{id:9000,label:'1153',mandatory:'M',shortDesc:'Reference code qualifier',desc:'Code qualifying a reference.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:9001,label:'1154',mandatory:'C',shortDesc:'Reference identifier',desc:'Identifies a reference.',repeat:1,length:'0..70',type:'an',level:4,children:[]},
			{id:9002,label:'1156',mandatory:'C',shortDesc:'Document line identifier',desc:'To identify a line of a document.',repeat:1,length:'0..6',type:'an',level:4,children:[]},
			{id:9003,label:'1056',mandatory:'C',shortDesc:'Version identifier',desc:'To identify a version.',repeat:1,length:'0..9',type:'an',level:4,children:[]},
			{id:9004,label:'1060',mandatory:'C',shortDesc:'Revision identifier',desc:'To identify a revision.',repeat:1,length:'0..6',type:'an',level:4,children:[]}]}]},
	{id:91,label:'DTM',mandatory:'C',shortDesc:'DATE/TIME/PERIOD',desc:'A segment specifying the date/time related to the reference.',repeat:5,length:'',type:'',level:2,children:[
		{id:910,label:'C507',mandatory:'M',shortDesc:'DATE/TIME/PERIOD',desc:'Date and/or time, or period relevant to the specified date/time/period type.',repeat:1,length:'',type:'',level:3,children:[
			{id:9100,label:'2005',mandatory:'M',shortDesc:'Date or time or period function code qualifier',desc:'Code qualifying the function of a date, time or period.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:9101,label:'2380',mandatory:'C',shortDesc:'Date or time or period text',desc:'The value of a date, a date and time, a time or of a period in a specified representation.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:9102,label:'2379',mandatory:'C',shortDesc:'Date or time or period format code',desc:'Code specifying the representation of a date, time or period.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]}]}]},
{id:10,label:'GRP2',mandatory:'C',shortDesc:'NAD#LOC#FII#GRP3#GRP4#GRP5#',desc:'A group of segments identifying the parties with associated information.',repeat:99,length:'',type:'',level:1,children:[
	{id:100,label:'NAD',mandatory:'M',shortDesc:'NAME AND ADDRESS',desc:'A segment identifying names and addresses of the parties, in coded or clear form, and their functions relevant to the order. Identification of the seller and buyer parties is mandatory for the order message. It is recommended that where possible only the coded form of the party ID should be specified e.g. The Buyer and Seller are known to each other, thus only the coded ID is required, but the Consignee or Delivery address may vary and would have to be clearly specified, preferably in structured format.',repeat:1,length:'',type:'',level:2,children:[
		{id:1000,label:'3035',mandatory:'M',shortDesc:'PARTY FUNCTION CODE QUALIFIER',desc:'Code giving specific meaning to a party.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:1001,label:'C082',mandatory:'C',shortDesc:'PARTY IDENTIFICATION DETAILS',desc:'Identification of a transaction party by code.',repeat:1,length:'',type:'',level:3,children:[
			{id:10010,label:'3039',mandatory:'M',shortDesc:'Party identifier',desc:'Code specifying the identity of a party.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:10011,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:10012,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:1002,label:'C058',mandatory:'C',shortDesc:'NAME AND ADDRESS',desc:'Unstructured name and address: one to five lines.',repeat:1,length:'',type:'',level:3,children:[
			{id:10020,label:'3124',mandatory:'M',shortDesc:'Name and address description',desc:'Free form description of a name and address line.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:10021,label:'3124',mandatory:'C',shortDesc:'Name and address description',desc:'Free form description of a name and address line.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:10022,label:'3124',mandatory:'C',shortDesc:'Name and address description',desc:'Free form description of a name and address line.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:10023,label:'3124',mandatory:'C',shortDesc:'Name and address description',desc:'Free form description of a name and address line.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:10024,label:'3124',mandatory:'C',shortDesc:'Name and address description',desc:'Free form description of a name and address line.',repeat:1,length:'0..35',type:'an',level:4,children:[]}]},
		{id:1003,label:'C080',mandatory:'C',shortDesc:'PARTY NAME',desc:'Identification of a transaction party by name, one to five lines. Party name may be formatted.',repeat:1,length:'',type:'',level:3,children:[
			{id:10030,label:'3036',mandatory:'M',shortDesc:'Party name',desc:'Name of a party.',repeat:1,length:'0..70',type:'an',level:4,children:[]},
			{id:10031,label:'3036',mandatory:'C',shortDesc:'Party name',desc:'Name of a party.',repeat:1,length:'0..70',type:'an',level:4,children:[]},
			{id:10032,label:'3036',mandatory:'C',shortDesc:'Party name',desc:'Name of a party.',repeat:1,length:'0..70',type:'an',level:4,children:[]},
			{id:10033,label:'3036',mandatory:'C',shortDesc:'Party name',desc:'Name of a party.',repeat:1,length:'0..70',type:'an',level:4,children:[]},
			{id:10034,label:'3036',mandatory:'C',shortDesc:'Party name',desc:'Name of a party.',repeat:1,length:'0..70',type:'an',level:4,children:[]},
			{id:10035,label:'3045',mandatory:'C',shortDesc:'Party name format code',desc:'Code specifying the representation of a party name.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:1004,label:'C059',mandatory:'C',shortDesc:'STREET',desc:'Street address and/or PO Box number in a structured address: one to four lines.',repeat:1,length:'',type:'',level:3,children:[
			{id:10040,label:'3042',mandatory:'M',shortDesc:'Street and number or post office box identifier',desc:'To identify a street and number and/or Post Office box number.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:10041,label:'3042',mandatory:'C',shortDesc:'Street and number or post office box identifier',desc:'To identify a street and number and/or Post Office box number.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:10042,label:'3042',mandatory:'C',shortDesc:'Street and number or post office box identifier',desc:'To identify a street and number and/or Post Office box number.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:10043,label:'3042',mandatory:'C',shortDesc:'Street and number or post office box identifier',desc:'To identify a street and number and/or Post Office box number.',repeat:1,length:'0..35',type:'an',level:4,children:[]}]},
		{id:1005,label:'3164',mandatory:'C',shortDesc:'CITY NAME',desc:'Name of a city.',repeat:1,length:'0..35',type:'an',level:3,children:[]},
		{id:1006,label:'C819',mandatory:'C',shortDesc:'COUNTRY SUBDIVISION DETAILS',desc:'To specify a country subdivision, such as state, canton, county, prefecture.',repeat:1,length:'',type:'',level:3,children:[
			{id:10060,label:'3229',mandatory:'C',shortDesc:'Country subdivision identifier',desc:'To identify a country subdivision, such as state, canton, county, prefecture.',repeat:1,length:'0..9',type:'an',level:4,children:[]},
			{id:10061,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:10062,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:10063,label:'3228',mandatory:'C',shortDesc:'Country subdivision name',desc:'Name of a country subdivision, such as state, canton, county, prefecture.',repeat:1,length:'0..70',type:'an',level:4,children:[]}]},
		{id:1007,label:'3251',mandatory:'C',shortDesc:'POSTAL IDENTIFICATION CODE',desc:'Code specifying the postal zone or address.',repeat:1,length:'0..17',type:'an',level:3,children:[]},
		{id:1008,label:'3207',mandatory:'C',shortDesc:'COUNTRY IDENTIFIER',desc:'Identification of the name of the country or other geographical entity as defined in ISO 3166-1 and UN/ECE Recommendation 3.',repeat:1,length:'0..3',type:'an',level:3,children:[]}]},
	{id:101,label:'LOC',mandatory:'C',shortDesc:'PLACE/LOCATION IDENTIFICATION',desc:'A segment giving more specific location information of the party specified in the NAD segment e.g. internal site/building number.',repeat:99,length:'',type:'',level:2,children:[
		{id:1010,label:'3227',mandatory:'M',shortDesc:'LOCATION FUNCTION CODE QUALIFIER',desc:'Code identifying the function of a location.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:1011,label:'C517',mandatory:'C',shortDesc:'LOCATION IDENTIFICATION',desc:'Identification of a location by code or name.',repeat:1,length:'',type:'',level:3,children:[
			{id:10110,label:'3225',mandatory:'C',shortDesc:'Location identifier',desc:'To identify a location.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:10111,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:10112,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:10113,label:'3224',mandatory:'C',shortDesc:'Location name',desc:'Name of the location.',repeat:1,length:'0..256',type:'an',level:4,children:[]}]},
		{id:1012,label:'C519',mandatory:'C',shortDesc:'RELATED LOCATION ONE IDENTIFICATION',desc:'Identification the first related location by code or name.',repeat:1,length:'',type:'',level:3,children:[
			{id:10120,label:'3223',mandatory:'C',shortDesc:'First related location identifier',desc:'To identify a first related location.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:10121,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:10122,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:10123,label:'3222',mandatory:'C',shortDesc:'First related location name',desc:'Name of first related location.',repeat:1,length:'0..70',type:'an',level:4,children:[]}]},
		{id:1013,label:'C553',mandatory:'C',shortDesc:'RELATED LOCATION TWO IDENTIFICATION',desc:'Identification of second related location by code or name.',repeat:1,length:'',type:'',level:3,children:[
			{id:10130,label:'3233',mandatory:'C',shortDesc:'Second related location identifier',desc:'To identify a second related location.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:10131,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:10132,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:10133,label:'3232',mandatory:'C',shortDesc:'Second related location name',desc:'Name of the second related location.',repeat:1,length:'0..70',type:'an',level:4,children:[]}]},
		{id:1014,label:'5479',mandatory:'C',shortDesc:'RELATION CODE',desc:'Code specifying a relation.',repeat:1,length:'0..3',type:'an',level:3,children:[]}]},
	{id:102,label:'FII',mandatory:'C',shortDesc:'FINANCIAL INSTITUTION INFORMATION',desc:'A segment identifying the financial institution (e.g. bank) and relevant account numbers for the seller, buyer and where necessary other parties e.g. the buyer may provide a choice of financial institutions for direct debit purposes.',repeat:5,length:'',type:'',level:2,children:[
		{id:1020,label:'3035',mandatory:'M',shortDesc:'PARTY FUNCTION CODE QUALIFIER',desc:'Code giving specific meaning to a party.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:1021,label:'C078',mandatory:'C',shortDesc:'ACCOUNT HOLDER IDENTIFICATION',desc:'Identification of an account holder by account number and/or account holder name in one or two lines. Number preferred.',repeat:1,length:'',type:'',level:3,children:[
			{id:10210,label:'3194',mandatory:'C',shortDesc:'Account holder identifier',desc:'To identify the holder of an account.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:10211,label:'3192',mandatory:'C',shortDesc:'Account holder name',desc:'Name of the holder of an account.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:10212,label:'3192',mandatory:'C',shortDesc:'Account holder name',desc:'Name of the holder of an account.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:10213,label:'6345',mandatory:'C',shortDesc:'Currency identification code',desc:'Code specifying a monetary unit.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:1022,label:'C088',mandatory:'C',shortDesc:'INSTITUTION IDENTIFICATION',desc:'Identification of a financial institution by code branch number, or name and name of place. Code or branch number preferred.',repeat:1,length:'',type:'',level:3,children:[
			{id:10220,label:'3433',mandatory:'C',shortDesc:'Institution name code',desc:'Code specifying the name of an institution.',repeat:1,length:'0..11',type:'an',level:4,children:[]},
			{id:10221,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:10222,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:10223,label:'3434',mandatory:'C',shortDesc:'Institution branch identifier',desc:'To identify a branch of an institution.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:10224,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:10225,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:10226,label:'3432',mandatory:'C',shortDesc:'Institution name',desc:'Name of an institution.',repeat:1,length:'0..70',type:'an',level:4,children:[]},
			{id:10227,label:'3436',mandatory:'C',shortDesc:'Institution branch location name',desc:'Name of the location of a branch of an institution.',repeat:1,length:'0..70',type:'an',level:4,children:[]}]},
		{id:1023,label:'3207',mandatory:'C',shortDesc:'COUNTRY IDENTIFIER',desc:'Identification of the name of the country or other geographical entity as defined in ISO 3166-1 and UN/ECE Recommendation 3.',repeat:1,length:'0..3',type:'an',level:3,children:[]}]},
	{id:103,label:'GRP3',mandatory:'C',shortDesc:'RFF#DTM#',desc:'A group of segments giving references only relevant to the specified party rather than the whole order.',repeat:99,length:'',type:'',level:2,children:[
		{id:1030,label:'RFF',mandatory:'M',shortDesc:'REFERENCE',desc:'A segment identifying the reference by its number and where appropriate a line number within a document.',repeat:1,length:'',type:'',level:3,children:[
			{id:10300,label:'C506',mandatory:'M',shortDesc:'REFERENCE',desc:'Identification of a reference.',repeat:1,length:'',type:'',level:4,children:[
				{id:103000,label:'1153',mandatory:'M',shortDesc:'Reference code qualifier',desc:'Code qualifying a reference.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:103001,label:'1154',mandatory:'C',shortDesc:'Reference identifier',desc:'Identifies a reference.',repeat:1,length:'0..70',type:'an',level:5,children:[]},
				{id:103002,label:'1156',mandatory:'C',shortDesc:'Document line identifier',desc:'To identify a line of a document.',repeat:1,length:'0..6',type:'an',level:5,children:[]},
				{id:103003,label:'1056',mandatory:'C',shortDesc:'Version identifier',desc:'To identify a version.',repeat:1,length:'0..9',type:'an',level:5,children:[]},
				{id:103004,label:'1060',mandatory:'C',shortDesc:'Revision identifier',desc:'To identify a revision.',repeat:1,length:'0..6',type:'an',level:5,children:[]}]}]},
		{id:1031,label:'DTM',mandatory:'C',shortDesc:'DATE/TIME/PERIOD',desc:'A segment specifying the date and/or time related to the reference.',repeat:5,length:'',type:'',level:3,children:[
			{id:10310,label:'C507',mandatory:'M',shortDesc:'DATE/TIME/PERIOD',desc:'Date and/or time, or period relevant to the specified date/time/period type.',repeat:1,length:'',type:'',level:4,children:[
				{id:103100,label:'2005',mandatory:'M',shortDesc:'Date or time or period function code qualifier',desc:'Code qualifying the function of a date, time or period.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:103101,label:'2380',mandatory:'C',shortDesc:'Date or time or period text',desc:'The value of a date, a date and time, a time or of a period in a specified representation.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:103102,label:'2379',mandatory:'C',shortDesc:'Date or time or period format code',desc:'Code specifying the representation of a date, time or period.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]}]}]},
	{id:104,label:'GRP4',mandatory:'C',shortDesc:'DOC#DTM#',desc:'A group of segments identifying the documentary requirements of the specified party.',repeat:5,length:'',type:'',level:2,children:[
		{id:1040,label:'DOC',mandatory:'M',shortDesc:'DOCUMENT/MESSAGE DETAILS',desc:'A segment identifying and providing information relating to the documents required by the party specified by the NAD segment. For example, the party may require a Certificate of Analysis.',repeat:1,length:'',type:'',level:3,children:[
			{id:10400,label:'C002',mandatory:'M',shortDesc:'DOCUMENT/MESSAGE NAME',desc:'Identification of a type of document/message by code or name. Code preferred.',repeat:1,length:'',type:'',level:4,children:[
				{id:104000,label:'1001',mandatory:'C',shortDesc:'Document name code',desc:'Code specifying the document name.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:104001,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:104002,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:104003,label:'1000',mandatory:'C',shortDesc:'Document name',desc:'Name of a document.',repeat:1,length:'0..35',type:'an',level:5,children:[]}]},
			{id:10401,label:'C503',mandatory:'C',shortDesc:'DOCUMENT/MESSAGE DETAILS',desc:'Identification of document/message by number, status, source and/or language.',repeat:1,length:'',type:'',level:4,children:[
				{id:104010,label:'1004',mandatory:'C',shortDesc:'Document identifier',desc:'To identify a document.',repeat:1,length:'0..70',type:'an',level:5,children:[]},
				{id:104011,label:'1373',mandatory:'C',shortDesc:'Document status code',desc:'Code specifying the status of a document.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:104012,label:'1366',mandatory:'C',shortDesc:'Document source description',desc:'Free form description of the source of a document.',repeat:1,length:'0..70',type:'an',level:5,children:[]},
				{id:104013,label:'3453',mandatory:'C',shortDesc:'Language name code',desc:'Code specifying the language name.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:104014,label:'1056',mandatory:'C',shortDesc:'Version identifier',desc:'To identify a version.',repeat:1,length:'0..9',type:'an',level:5,children:[]},
				{id:104015,label:'1060',mandatory:'C',shortDesc:'Revision identifier',desc:'To identify a revision.',repeat:1,length:'0..6',type:'an',level:5,children:[]}]},
			{id:10402,label:'3153',mandatory:'C',shortDesc:'COMMUNICATION MEDIUM TYPE CODE',desc:'Code specifying the type of communication medium.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:10403,label:'1220',mandatory:'C',shortDesc:'DOCUMENT COPIES REQUIRED QUANTITY',desc:'Quantity of document copies required.',repeat:1,length:'0..2',type:'n',level:4,children:[]},
			{id:10404,label:'1218',mandatory:'C',shortDesc:'DOCUMENT ORIGINALS REQUIRED QUANTITY',desc:'Quantity of document originals required.',repeat:1,length:'0..2',type:'n',level:4,children:[]}]},
		{id:1041,label:'DTM',mandatory:'C',shortDesc:'DATE/TIME/PERIOD',desc:'A segment specifying the date and/or time of the document.',repeat:5,length:'',type:'',level:3,children:[
			{id:10410,label:'C507',mandatory:'M',shortDesc:'DATE/TIME/PERIOD',desc:'Date and/or time, or period relevant to the specified date/time/period type.',repeat:1,length:'',type:'',level:4,children:[
				{id:104100,label:'2005',mandatory:'M',shortDesc:'Date or time or period function code qualifier',desc:'Code qualifying the function of a date, time or period.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:104101,label:'2380',mandatory:'C',shortDesc:'Date or time or period text',desc:'The value of a date, a date and time, a time or of a period in a specified representation.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:104102,label:'2379',mandatory:'C',shortDesc:'Date or time or period format code',desc:'Code specifying the representation of a date, time or period.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]}]}]},
	{id:105,label:'GRP5',mandatory:'C',shortDesc:'CTA#COM#',desc:'A group of segments giving contact details of the specific person or department within the party identified in the NAD segment.',repeat:5,length:'',type:'',level:2,children:[
		{id:1050,label:'CTA',mandatory:'M',shortDesc:'CONTACT INFORMATION',desc:'A segment to identify a person or department, and their function, to whom communications should be directed.',repeat:1,length:'',type:'',level:3,children:[
			{id:10500,label:'3139',mandatory:'C',shortDesc:'CONTACT FUNCTION CODE',desc:'Code specifying the function of a contact (e.g. department or person).',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:10501,label:'C056',mandatory:'C',shortDesc:'CONTACT DETAILS',desc:'Code and/or name of a contact such as a department or employee. Code preferred.',repeat:1,length:'',type:'',level:4,children:[
				{id:105010,label:'3413',mandatory:'C',shortDesc:'Contact identifier',desc:'To identify a contact, such as a department or employee.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:105011,label:'3412',mandatory:'C',shortDesc:'Contact name',desc:'Name of a contact, such as a department or employee.',repeat:1,length:'0..256',type:'an',level:5,children:[]}]}]},
		{id:1051,label:'COM',mandatory:'C',shortDesc:'COMMUNICATION CONTACT',desc:'A segment to identify a communications type and number for the contact specified in the CTA segment.',repeat:5,length:'',type:'',level:3,children:[
			{id:10510,label:'C076',mandatory:'M',shortDesc:'COMMUNICATION CONTACT',desc:'Communication number of a department or employee in a specified channel.',repeat:1,length:'',type:'',level:4,children:[
				{id:105100,label:'3148',mandatory:'M',shortDesc:'Communication address identifier',desc:'To identify a communication address.',repeat:1,length:'0..512',type:'an',level:5,children:[]},
				{id:105101,label:'3155',mandatory:'M',shortDesc:'Communication means type code',desc:'Code specifying the type of communication address.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]}]}]}]},
{id:11,label:'GRP6',mandatory:'C',shortDesc:'TAX#MOA#LOC#',desc:'A group of segments specifying tax related information, and when necessary, the location(s) to which that tax information relates.',repeat:5,length:'',type:'',level:1,children:[
	{id:110,label:'TAX',mandatory:'M',shortDesc:'DUTY/TAX/FEE DETAILS',desc:'A segment specifying a tax type, category and rate, or exemption, relating to the whole order e.g. Value Added Tax at the standard rate is applicable for all items.',repeat:1,length:'',type:'',level:2,children:[
		{id:1100,label:'5283',mandatory:'M',shortDesc:'DUTY OR TAX OR FEE FUNCTION CODE QUALIFIER',desc:'Code qualifying the function of a duty or tax or fee.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:1101,label:'C241',mandatory:'C',shortDesc:'DUTY/TAX/FEE TYPE',desc:'Code and/or name identifying duty, tax or fee.',repeat:1,length:'',type:'',level:3,children:[
			{id:11010,label:'5153',mandatory:'C',shortDesc:'Duty or tax or fee type name code',desc:'Code specifying a type of duty, tax or fee.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:11011,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:11012,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:11013,label:'5152',mandatory:'C',shortDesc:'Duty or tax or fee type name',desc:'Name of a type of duty, tax or fee.',repeat:1,length:'0..35',type:'an',level:4,children:[]}]},
		{id:1102,label:'C533',mandatory:'C',shortDesc:'DUTY/TAX/FEE ACCOUNT DETAIL',desc:'Indication of account reference for duties, taxes and/or fees.',repeat:1,length:'',type:'',level:3,children:[
			{id:11020,label:'5289',mandatory:'M',shortDesc:'Duty or tax or fee account code',desc:'Code specifying a duty or tax or fee account.',repeat:1,length:'0..6',type:'an',level:4,children:[]},
			{id:11021,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:11022,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:1103,label:'5286',mandatory:'C',shortDesc:'DUTY OR TAX OR FEE ASSESSMENT BASIS QUANTITY',desc:'To specify the basis on which a duty or tax or fee will be assessed.',repeat:1,length:'0..15',type:'an',level:3,children:[]},
		{id:1104,label:'C243',mandatory:'C',shortDesc:'DUTY/TAX/FEE DETAIL',desc:'Rate of duty/tax/fee applicable to commodities or of tax applicable to services.',repeat:1,length:'',type:'',level:3,children:[
			{id:11040,label:'5279',mandatory:'C',shortDesc:'Duty or tax or fee rate code',desc:'Code specifying a rate of a duty or tax or fee.',repeat:1,length:'0..7',type:'an',level:4,children:[]},
			{id:11041,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:11042,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:11043,label:'5278',mandatory:'C',shortDesc:'Duty or tax or fee rate',desc:'Rate of a duty or tax or fee.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:11044,label:'5273',mandatory:'C',shortDesc:'Duty or tax or fee rate basis code',desc:'Code specifying the basis for a duty or tax or fee rate.',repeat:1,length:'0..12',type:'an',level:4,children:[]},
			{id:11045,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:11046,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:1105,label:'5305',mandatory:'C',shortDesc:'DUTY OR TAX OR FEE CATEGORY CODE',desc:'Code specifying a duty or tax or fee category.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:1106,label:'3446',mandatory:'C',shortDesc:'PARTY TAX IDENTIFIER',desc:'To identify a number assigned to a party by a tax authority.',repeat:1,length:'0..20',type:'an',level:3,children:[]},
		{id:1107,label:'1227',mandatory:'C',shortDesc:'CALCULATION SEQUENCE CODE',desc:'Code specifying a calculation sequence.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:1108,label:'5307',mandatory:'C',shortDesc:'TAX OR DUTY OR FEE PAYMENT DUE DATE CODE',desc:'A code indicating when the duty, tax, or fee payment will be due.',repeat:1,length:'0..3',type:'an',level:3,children:[]}]},
	{id:111,label:'MOA',mandatory:'C',shortDesc:'MONETARY AMOUNT',desc:'A segment specifying the amount for the identified tax/fee.',repeat:1,length:'',type:'',level:2,children:[
		{id:1110,label:'C516',mandatory:'M',shortDesc:'MONETARY AMOUNT',desc:'Amount of goods or services stated as a monetary amount in a specified currency.',repeat:1,length:'',type:'',level:3,children:[
			{id:11100,label:'5025',mandatory:'M',shortDesc:'Monetary amount type code qualifier',desc:'Code qualifying the type of monetary amount.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:11101,label:'5004',mandatory:'C',shortDesc:'Monetary amount',desc:'To specify a monetary amount.',repeat:1,length:'0..35',type:'n',level:4,children:[]},
			{id:11102,label:'6345',mandatory:'C',shortDesc:'Currency identification code',desc:'Code specifying a monetary unit.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:11103,label:'6343',mandatory:'C',shortDesc:'Currency type code qualifier',desc:'Code qualifying the type of currency.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:11104,label:'4405',mandatory:'C',shortDesc:'Status description code',desc:'Code specifying a status.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]}]},
	{id:112,label:'LOC',mandatory:'C',shortDesc:'PLACE/LOCATION IDENTIFICATION',desc:'A segment indicating the location to which the tax or exemption specified in the tax segment applies e.g. city or state or country.',repeat:9,length:'',type:'',level:2,children:[
		{id:1120,label:'3227',mandatory:'M',shortDesc:'LOCATION FUNCTION CODE QUALIFIER',desc:'Code identifying the function of a location.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:1121,label:'C517',mandatory:'C',shortDesc:'LOCATION IDENTIFICATION',desc:'Identification of a location by code or name.',repeat:1,length:'',type:'',level:3,children:[
			{id:11210,label:'3225',mandatory:'C',shortDesc:'Location identifier',desc:'To identify a location.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:11211,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:11212,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:11213,label:'3224',mandatory:'C',shortDesc:'Location name',desc:'Name of the location.',repeat:1,length:'0..256',type:'an',level:4,children:[]}]},
		{id:1122,label:'C519',mandatory:'C',shortDesc:'RELATED LOCATION ONE IDENTIFICATION',desc:'Identification the first related location by code or name.',repeat:1,length:'',type:'',level:3,children:[
			{id:11220,label:'3223',mandatory:'C',shortDesc:'First related location identifier',desc:'To identify a first related location.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:11221,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:11222,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:11223,label:'3222',mandatory:'C',shortDesc:'First related location name',desc:'Name of first related location.',repeat:1,length:'0..70',type:'an',level:4,children:[]}]},
		{id:1123,label:'C553',mandatory:'C',shortDesc:'RELATED LOCATION TWO IDENTIFICATION',desc:'Identification of second related location by code or name.',repeat:1,length:'',type:'',level:3,children:[
			{id:11230,label:'3233',mandatory:'C',shortDesc:'Second related location identifier',desc:'To identify a second related location.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:11231,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:11232,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:11233,label:'3232',mandatory:'C',shortDesc:'Second related location name',desc:'Name of the second related location.',repeat:1,length:'0..70',type:'an',level:4,children:[]}]},
		{id:1124,label:'5479',mandatory:'C',shortDesc:'RELATION CODE',desc:'Code specifying a relation.',repeat:1,length:'0..3',type:'an',level:3,children:[]}]}]},
{id:12,label:'GRP7',mandatory:'C',shortDesc:'CUX#PCD#DTM#',desc:'A group of segments specifying the currencies and related dates/periods valid for the whole order. Currency data may be omitted in national applications but will be required for international transactions.',repeat:5,length:'',type:'',level:1,children:[
	{id:120,label:'CUX',mandatory:'M',shortDesc:'CURRENCIES',desc:'A segment identifying the currencies required in the order e.g. the order currency. A rate of exchange may be given to convert a reference currency into a target currency.',repeat:1,length:'',type:'',level:2,children:[
		{id:1200,label:'C504',mandatory:'C',shortDesc:'CURRENCY DETAILS',desc:'The usage to which a currency relates.',repeat:1,length:'',type:'',level:3,children:[
			{id:12000,label:'6347',mandatory:'M',shortDesc:'Currency usage code qualifier',desc:'Code qualifying the usage of a currency.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:12001,label:'6345',mandatory:'C',shortDesc:'Currency identification code',desc:'Code specifying a monetary unit.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:12002,label:'6343',mandatory:'C',shortDesc:'Currency type code qualifier',desc:'Code qualifying the type of currency.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:12003,label:'6348',mandatory:'C',shortDesc:'Currency rate',desc:'To specify the value of the multiplication factor used in expressing currency units.',repeat:1,length:'0..4',type:'n',level:4,children:[]}]},
		{id:1201,label:'C504',mandatory:'C',shortDesc:'CURRENCY DETAILS',desc:'The usage to which a currency relates.',repeat:1,length:'',type:'',level:3,children:[
			{id:12010,label:'6347',mandatory:'M',shortDesc:'Currency usage code qualifier',desc:'Code qualifying the usage of a currency.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:12011,label:'6345',mandatory:'C',shortDesc:'Currency identification code',desc:'Code specifying a monetary unit.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:12012,label:'6343',mandatory:'C',shortDesc:'Currency type code qualifier',desc:'Code qualifying the type of currency.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:12013,label:'6348',mandatory:'C',shortDesc:'Currency rate',desc:'To specify the value of the multiplication factor used in expressing currency units.',repeat:1,length:'0..4',type:'n',level:4,children:[]}]},
		{id:1202,label:'5402',mandatory:'C',shortDesc:'CURRENCY EXCHANGE RATE',desc:'To specify the rate at which one specified currency is expressed in another specified currency.',repeat:1,length:'0..12',type:'n',level:3,children:[]},
		{id:1203,label:'6341',mandatory:'C',shortDesc:'EXCHANGE RATE CURRENCY MARKET IDENTIFIER',desc:'To identify an exchange rate currency market.',repeat:1,length:'0..3',type:'an',level:3,children:[]}]},
	{id:121,label:'PCD',mandatory:'C',shortDesc:'PERCENTAGE DETAILS',desc:'A segment specifying the fluctuation beyond those limits will allow one or either party to re-negotiate prices.',repeat:5,length:'',type:'',level:2,children:[
		{id:1210,label:'C501',mandatory:'M',shortDesc:'PERCENTAGE DETAILS',desc:'Percentage relating to a specified basis.',repeat:1,length:'',type:'',level:3,children:[
			{id:12100,label:'5245',mandatory:'M',shortDesc:'Percentage type code qualifier',desc:'Code qualifying the type of percentage.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:12101,label:'5482',mandatory:'C',shortDesc:'Percentage',desc:'To specify a percentage.',repeat:1,length:'0..10',type:'n',level:4,children:[]},
			{id:12102,label:'5249',mandatory:'C',shortDesc:'Percentage basis identification code',desc:'Code specifying the basis on which a percentage is calculated.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:12103,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:12104,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:1211,label:'4405',mandatory:'C',shortDesc:'STATUS DESCRIPTION CODE',desc:'Code specifying a status.',repeat:1,length:'0..3',type:'an',level:3,children:[]}]},
	{id:122,label:'DTM',mandatory:'C',shortDesc:'DATE/TIME/PERIOD',desc:'A segment specifying the date/time/period related to the rate of exchange.',repeat:5,length:'',type:'',level:2,children:[
		{id:1220,label:'C507',mandatory:'M',shortDesc:'DATE/TIME/PERIOD',desc:'Date and/or time, or period relevant to the specified date/time/period type.',repeat:1,length:'',type:'',level:3,children:[
			{id:12200,label:'2005',mandatory:'M',shortDesc:'Date or time or period function code qualifier',desc:'Code qualifying the function of a date, time or period.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:12201,label:'2380',mandatory:'C',shortDesc:'Date or time or period text',desc:'The value of a date, a date and time, a time or of a period in a specified representation.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:12202,label:'2379',mandatory:'C',shortDesc:'Date or time or period format code',desc:'Code specifying the representation of a date, time or period.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]}]}]},
{id:13,label:'GRP8',mandatory:'C',shortDesc:'PYT#DTM#PCD#GRP9#',desc:'A segment group specifying the terms of payment and accounting classifications applicable to the entire message.',repeat:10,length:'',type:'',level:1,children:[
	{id:130,label:'PYT',mandatory:'M',shortDesc:'PAYMENT TERMS',desc:'A segment identifying the payment terms and date/time basis.',repeat:1,length:'',type:'',level:2,children:[
		{id:1300,label:'4279',mandatory:'M',shortDesc:'PAYMENT TERMS TYPE CODE QUALIFIER',desc:'Code qualifying the type of payment terms.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:1301,label:'C019',mandatory:'C',shortDesc:'PAYMENT TERMS',desc:'Terms of payment information.',repeat:1,length:'',type:'',level:3,children:[
			{id:13010,label:'4277',mandatory:'C',shortDesc:'Payment terms description identifier',desc:'Identification of the terms of payment between the parties to a transaction (generic term).',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:13011,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:13012,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:13013,label:'4276',mandatory:'C',shortDesc:'Payment terms description',desc:'Free form description of the conditions of payment between the parties to a transaction.',repeat:1,length:'0..35',type:'an',level:4,children:[]}]},
		{id:1302,label:'2475',mandatory:'C',shortDesc:'EVENT TIME REFERENCE CODE',desc:'Code specifying a time that references an event that will or has occurred.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:1303,label:'2009',mandatory:'C',shortDesc:'TERMS TIME RELATION CODE',desc:'Code relating terms to a reference date, time or period.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:1304,label:'2151',mandatory:'C',shortDesc:'PERIOD TYPE CODE',desc:'Code specifying the type of period.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:1305,label:'2152',mandatory:'C',shortDesc:'PERIOD COUNT QUANTITY',desc:'Count of the number of periods.',repeat:1,length:'0..3',type:'n',level:3,children:[]}]},
	{id:131,label:'DTM',mandatory:'C',shortDesc:'DATE/TIME/PERIOD',desc:'A segment giving the specific date/time/period, if needed, of any payments, discounts, installments etc.',repeat:5,length:'',type:'',level:2,children:[
		{id:1310,label:'C507',mandatory:'M',shortDesc:'DATE/TIME/PERIOD',desc:'Date and/or time, or period relevant to the specified date/time/period type.',repeat:1,length:'',type:'',level:3,children:[
			{id:13100,label:'2005',mandatory:'M',shortDesc:'Date or time or period function code qualifier',desc:'Code qualifying the function of a date, time or period.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:13101,label:'2380',mandatory:'C',shortDesc:'Date or time or period text',desc:'The value of a date, a date and time, a time or of a period in a specified representation.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:13102,label:'2379',mandatory:'C',shortDesc:'Date or time or period format code',desc:'Code specifying the representation of a date, time or period.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]}]},
	{id:132,label:'PCD',mandatory:'C',shortDesc:'PERCENTAGE DETAILS',desc:'A segment specifying the discount, interest, penalty as well as installment percentage.',repeat:1,length:'',type:'',level:2,children:[
		{id:1320,label:'C501',mandatory:'M',shortDesc:'PERCENTAGE DETAILS',desc:'Percentage relating to a specified basis.',repeat:1,length:'',type:'',level:3,children:[
			{id:13200,label:'5245',mandatory:'M',shortDesc:'Percentage type code qualifier',desc:'Code qualifying the type of percentage.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:13201,label:'5482',mandatory:'C',shortDesc:'Percentage',desc:'To specify a percentage.',repeat:1,length:'0..10',type:'n',level:4,children:[]},
			{id:13202,label:'5249',mandatory:'C',shortDesc:'Percentage basis identification code',desc:'Code specifying the basis on which a percentage is calculated.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:13203,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:13204,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:1321,label:'4405',mandatory:'C',shortDesc:'STATUS DESCRIPTION CODE',desc:'Code specifying a status.',repeat:1,length:'0..3',type:'an',level:3,children:[]}]},
	{id:133,label:'GRP9',mandatory:'C',shortDesc:'MOA#GIR#RJL#',desc:'A group of segments identifying accounting classification reference number data and related monetary amounts at the header level.',repeat:9999,length:'',type:'',level:2,children:[
		{id:1330,label:'MOA',mandatory:'M',shortDesc:'MONETARY AMOUNT',desc:'A segment specifying the amount associated with the specified accounting classification reference number data and payment information.',repeat:1,length:'',type:'',level:3,children:[
			{id:13300,label:'C516',mandatory:'M',shortDesc:'MONETARY AMOUNT',desc:'Amount of goods or services stated as a monetary amount in a specified currency.',repeat:1,length:'',type:'',level:4,children:[
				{id:133000,label:'5025',mandatory:'M',shortDesc:'Monetary amount type code qualifier',desc:'Code qualifying the type of monetary amount.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:133001,label:'5004',mandatory:'C',shortDesc:'Monetary amount',desc:'To specify a monetary amount.',repeat:1,length:'0..35',type:'n',level:5,children:[]},
				{id:133002,label:'6345',mandatory:'C',shortDesc:'Currency identification code',desc:'Code specifying a monetary unit.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:133003,label:'6343',mandatory:'C',shortDesc:'Currency type code qualifier',desc:'Code qualifying the type of currency.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:133004,label:'4405',mandatory:'C',shortDesc:'Status description code',desc:'Code specifying a status.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]}]},
		{id:1331,label:'GIR',mandatory:'C',shortDesc:'RELATED IDENTIFICATION NUMBERS',desc:'A segment providing related accounting classification reference number data.',repeat:9,length:'',type:'',level:3,children:[
			{id:13310,label:'7297',mandatory:'M',shortDesc:'SET TYPE CODE QUALIFIER',desc:'Code qualifying the type of set.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:13311,label:'C206',mandatory:'M',shortDesc:'IDENTIFICATION NUMBER',desc:'The identification of an object.',repeat:1,length:'',type:'',level:4,children:[
				{id:133110,label:'7402',mandatory:'M',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:133111,label:'7405',mandatory:'C',shortDesc:'Object identification code qualifier',desc:'Code qualifying the identification of an object.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:133112,label:'4405',mandatory:'C',shortDesc:'Status description code',desc:'Code specifying a status.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]},
			{id:13312,label:'C206',mandatory:'C',shortDesc:'IDENTIFICATION NUMBER',desc:'The identification of an object.',repeat:1,length:'',type:'',level:4,children:[
				{id:133120,label:'7402',mandatory:'M',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:133121,label:'7405',mandatory:'C',shortDesc:'Object identification code qualifier',desc:'Code qualifying the identification of an object.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:133122,label:'4405',mandatory:'C',shortDesc:'Status description code',desc:'Code specifying a status.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]},
			{id:13313,label:'C206',mandatory:'C',shortDesc:'IDENTIFICATION NUMBER',desc:'The identification of an object.',repeat:1,length:'',type:'',level:4,children:[
				{id:133130,label:'7402',mandatory:'M',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:133131,label:'7405',mandatory:'C',shortDesc:'Object identification code qualifier',desc:'Code qualifying the identification of an object.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:133132,label:'4405',mandatory:'C',shortDesc:'Status description code',desc:'Code specifying a status.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]},
			{id:13314,label:'C206',mandatory:'C',shortDesc:'IDENTIFICATION NUMBER',desc:'The identification of an object.',repeat:1,length:'',type:'',level:4,children:[
				{id:133140,label:'7402',mandatory:'M',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:133141,label:'7405',mandatory:'C',shortDesc:'Object identification code qualifier',desc:'Code qualifying the identification of an object.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:133142,label:'4405',mandatory:'C',shortDesc:'Status description code',desc:'Code specifying a status.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]},
			{id:13315,label:'C206',mandatory:'C',shortDesc:'IDENTIFICATION NUMBER',desc:'The identification of an object.',repeat:1,length:'',type:'',level:4,children:[
				{id:133150,label:'7402',mandatory:'M',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:133151,label:'7405',mandatory:'C',shortDesc:'Object identification code qualifier',desc:'Code qualifying the identification of an object.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:133152,label:'4405',mandatory:'C',shortDesc:'Status description code',desc:'Code specifying a status.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]}]},
		{id:1332,label:'RJL',mandatory:'C',shortDesc:'ACCOUNTING JOURNAL IDENTIFICATION',desc:'A segment identifying the components of an account.',repeat:99,length:'',type:'',level:3,children:[
			{id:13320,label:'C595',mandatory:'C',shortDesc:'ACCOUNTING JOURNAL IDENTIFICATION',desc:'Identification of an accounting journal.',repeat:1,length:'',type:'',level:4,children:[
				{id:133200,label:'1171',mandatory:'M',shortDesc:'Accounting journal identifier',desc:'To identify an accounting journal.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:133201,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:133202,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:133203,label:'1170',mandatory:'C',shortDesc:'Accounting journal name',desc:'Name of an accounting journal.',repeat:1,length:'0..35',type:'an',level:5,children:[]}]},
			{id:13321,label:'C596',mandatory:'C',shortDesc:'ACCOUNTING ENTRY TYPE DETAILS',desc:'Identification of the type of entry included in an accounting journal.',repeat:1,length:'',type:'',level:4,children:[
				{id:133210,label:'4475',mandatory:'M',shortDesc:'Accounting entry type name code',desc:'Code specifying a type of accounting entry.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:133211,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:133212,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:133213,label:'4474',mandatory:'C',shortDesc:'Accounting entry type name',desc:'Name of a type of accounting entry.',repeat:1,length:'0..35',type:'an',level:5,children:[]}]}]}]}]},
{id:14,label:'GRP10',mandatory:'C',shortDesc:'TDT#GRP11#',desc:'A group of segments identifying the mode and means of transport, location and relevant dates and times for transportation, relating to the whole order.',repeat:10,length:'',type:'',level:1,children:[
	{id:140,label:'TDT',mandatory:'M',shortDesc:'TRANSPORT INFORMATION',desc:'A segment specifying the mode, means and identification of the transport for the goods being ordered. If required, the carrier's address should be indicated within the NAD Segment group.',repeat:1,length:'',type:'',level:2,children:[
		{id:1400,label:'8051',mandatory:'M',shortDesc:'TRANSPORT STAGE CODE QUALIFIER',desc:'Code qualifying a specific stage of transport.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:1401,label:'8028',mandatory:'C',shortDesc:'MEANS OF TRANSPORT JOURNEY IDENTIFIER',desc:'To identify a journey of a means of transport.',repeat:1,length:'0..17',type:'an',level:3,children:[]},
		{id:1402,label:'C220',mandatory:'C',shortDesc:'MODE OF TRANSPORT',desc:'Method of transport code or name. Code preferred.',repeat:1,length:'',type:'',level:3,children:[
			{id:14020,label:'8067',mandatory:'C',shortDesc:'Transport mode name code',desc:'Code specifying the name of a mode of transport.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:14021,label:'8066',mandatory:'C',shortDesc:'Transport mode name',desc:'Name of a mode of transport.',repeat:1,length:'0..17',type:'an',level:4,children:[]}]},
		{id:1403,label:'C001',mandatory:'C',shortDesc:'TRANSPORT MEANS',desc:'Code and/or name identifying the type of means of transport.',repeat:1,length:'',type:'',level:3,children:[
			{id:14030,label:'8179',mandatory:'C',shortDesc:'Transport means description code',desc:'Code specifying the means of transport.',repeat:1,length:'0..8',type:'an',level:4,children:[]},
			{id:14031,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:14032,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:14033,label:'8178',mandatory:'C',shortDesc:'Transport means description',desc:'Free form description of the means of transport.',repeat:1,length:'0..17',type:'an',level:4,children:[]}]},
		{id:1404,label:'C040',mandatory:'C',shortDesc:'CARRIER',desc:'Identification of a carrier by code and/or by name. Code preferred.',repeat:1,length:'',type:'',level:3,children:[
			{id:14040,label:'3127',mandatory:'C',shortDesc:'Carrier identifier',desc:'To identify a carrier.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:14041,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:14042,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:14043,label:'3126',mandatory:'C',shortDesc:'Carrier name',desc:'Name of a carrier.',repeat:1,length:'0..35',type:'an',level:4,children:[]}]},
		{id:1405,label:'8101',mandatory:'C',shortDesc:'TRANSIT DIRECTION INDICATOR CODE',desc:'Code specifying the direction of transport.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:1406,label:'C401',mandatory:'C',shortDesc:'EXCESS TRANSPORTATION INFORMATION',desc:'To provide details of reason for, and responsibility for, use of transportation other than normally utilized.',repeat:1,length:'',type:'',level:3,children:[
			{id:14060,label:'8457',mandatory:'M',shortDesc:'Excess transportation reason code',desc:'Code specifying the reason for excess transportation.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:14061,label:'8459',mandatory:'M',shortDesc:'Excess transportation responsibility code',desc:'Code specifying the responsibility for excess transportation.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:14062,label:'7130',mandatory:'C',shortDesc:'Customer shipment authorisation identifier',desc:'To identify the authorisation to ship issued by the customer.',repeat:1,length:'0..17',type:'an',level:4,children:[]}]},
		{id:1407,label:'C222',mandatory:'C',shortDesc:'TRANSPORT IDENTIFICATION',desc:'Code and/or name identifying the means of transport.',repeat:1,length:'',type:'',level:3,children:[
			{id:14070,label:'8213',mandatory:'C',shortDesc:'Transport means identification name identifier',desc:'Identifies the name of the transport means.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:14071,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:14072,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:14073,label:'8212',mandatory:'C',shortDesc:'Transport means identification name',desc:'Name identifying a means of transport.',repeat:1,length:'0..70',type:'an',level:4,children:[]},
			{id:14074,label:'8453',mandatory:'C',shortDesc:'Transport means nationality code',desc:'Code specifying the nationality of a means of transport.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:1408,label:'8281',mandatory:'C',shortDesc:'TRANSPORT MEANS OWNERSHIP INDICATOR CODE',desc:'Code indicating the ownership of a means of transport.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:1409,label:'C003',mandatory:'C',shortDesc:'POWER TYPE',desc:'To specify the type of power.',repeat:1,length:'',type:'',level:3,children:[
			{id:14090,label:'7041',mandatory:'C',shortDesc:'Power type code',desc:'Code indicating the type of power.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:14091,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:14092,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:14093,label:'7040',mandatory:'C',shortDesc:'Power type description',desc:'Description of the type of power.',repeat:1,length:'0..17',type:'an',level:4,children:[]}]}]},
	{id:141,label:'GRP11',mandatory:'C',shortDesc:'LOC#DTM#',desc:'A group of segments giving the location and date/time information relative to the transportation.',repeat:10,length:'',type:'',level:2,children:[
		{id:1410,label:'LOC',mandatory:'M',shortDesc:'PLACE/LOCATION IDENTIFICATION',desc:'A segment identifying locations relevant to the transport specified in the TDT segment e.g. place of departure or border crossing point.',repeat:1,length:'',type:'',level:3,children:[
			{id:14100,label:'3227',mandatory:'M',shortDesc:'LOCATION FUNCTION CODE QUALIFIER',desc:'Code identifying the function of a location.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:14101,label:'C517',mandatory:'C',shortDesc:'LOCATION IDENTIFICATION',desc:'Identification of a location by code or name.',repeat:1,length:'',type:'',level:4,children:[
				{id:141010,label:'3225',mandatory:'C',shortDesc:'Location identifier',desc:'To identify a location.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:141011,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:141012,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:141013,label:'3224',mandatory:'C',shortDesc:'Location name',desc:'Name of the location.',repeat:1,length:'0..256',type:'an',level:5,children:[]}]},
			{id:14102,label:'C519',mandatory:'C',shortDesc:'RELATED LOCATION ONE IDENTIFICATION',desc:'Identification the first related location by code or name.',repeat:1,length:'',type:'',level:4,children:[
				{id:141020,label:'3223',mandatory:'C',shortDesc:'First related location identifier',desc:'To identify a first related location.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:141021,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:141022,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:141023,label:'3222',mandatory:'C',shortDesc:'First related location name',desc:'Name of first related location.',repeat:1,length:'0..70',type:'an',level:5,children:[]}]},
			{id:14103,label:'C553',mandatory:'C',shortDesc:'RELATED LOCATION TWO IDENTIFICATION',desc:'Identification of second related location by code or name.',repeat:1,length:'',type:'',level:4,children:[
				{id:141030,label:'3233',mandatory:'C',shortDesc:'Second related location identifier',desc:'To identify a second related location.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:141031,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:141032,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:141033,label:'3232',mandatory:'C',shortDesc:'Second related location name',desc:'Name of the second related location.',repeat:1,length:'0..70',type:'an',level:5,children:[]}]},
			{id:14104,label:'5479',mandatory:'C',shortDesc:'RELATION CODE',desc:'Code specifying a relation.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:1411,label:'DTM',mandatory:'C',shortDesc:'DATE/TIME/PERIOD',desc:'A segment identifying the date/time details of departure and/or arrival of the transported goods for the specified location.',repeat:5,length:'',type:'',level:3,children:[
			{id:14110,label:'C507',mandatory:'M',shortDesc:'DATE/TIME/PERIOD',desc:'Date and/or time, or period relevant to the specified date/time/period type.',repeat:1,length:'',type:'',level:4,children:[
				{id:141100,label:'2005',mandatory:'M',shortDesc:'Date or time or period function code qualifier',desc:'Code qualifying the function of a date, time or period.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:141101,label:'2380',mandatory:'C',shortDesc:'Date or time or period text',desc:'The value of a date, a date and time, a time or of a period in a specified representation.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:141102,label:'2379',mandatory:'C',shortDesc:'Date or time or period format code',desc:'Code specifying the representation of a date, time or period.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]}]}]}]},
{id:15,label:'GRP12',mandatory:'C',shortDesc:'TOD#LOC#',desc:'A group of segments indicating the terms of delivery for the whole order.',repeat:5,length:'',type:'',level:1,children:[
	{id:150,label:'TOD',mandatory:'M',shortDesc:'TERMS OF DELIVERY OR TRANSPORT',desc:'A segment identifying the delivery terms to be used e.g. UN INCOTERMS code could be used to specify the delivery terms.',repeat:1,length:'',type:'',level:2,children:[
		{id:1500,label:'4055',mandatory:'C',shortDesc:'DELIVERY OR TRANSPORT TERMS FUNCTION CODE',desc:'Code specifying the function of delivery or transport terms.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:1501,label:'4215',mandatory:'C',shortDesc:'TRANSPORT CHARGES PAYMENT METHOD CODE',desc:'Code specifying the payment method for transport charges.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:1502,label:'C100',mandatory:'C',shortDesc:'TERMS OF DELIVERY OR TRANSPORT',desc:'Terms of delivery or transport code from a specified source.',repeat:1,length:'',type:'',level:3,children:[
			{id:15020,label:'4053',mandatory:'C',shortDesc:'Delivery or transport terms description code',desc:'Code specifying the delivery or transport terms.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:15021,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:15022,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:15023,label:'4052',mandatory:'C',shortDesc:'Delivery or transport terms description',desc:'Free form description of delivery or transport terms.',repeat:1,length:'0..70',type:'an',level:4,children:[]},
			{id:15024,label:'4052',mandatory:'C',shortDesc:'Delivery or transport terms description',desc:'Free form description of delivery or transport terms.',repeat:1,length:'0..70',type:'an',level:4,children:[]}]}]},
	{id:151,label:'LOC',mandatory:'C',shortDesc:'PLACE/LOCATION IDENTIFICATION',desc:'A segment identifying locations relevant to the delivery terms specified in the TOD segment.',repeat:2,length:'',type:'',level:2,children:[
		{id:1510,label:'3227',mandatory:'M',shortDesc:'LOCATION FUNCTION CODE QUALIFIER',desc:'Code identifying the function of a location.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:1511,label:'C517',mandatory:'C',shortDesc:'LOCATION IDENTIFICATION',desc:'Identification of a location by code or name.',repeat:1,length:'',type:'',level:3,children:[
			{id:15110,label:'3225',mandatory:'C',shortDesc:'Location identifier',desc:'To identify a location.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:15111,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:15112,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:15113,label:'3224',mandatory:'C',shortDesc:'Location name',desc:'Name of the location.',repeat:1,length:'0..256',type:'an',level:4,children:[]}]},
		{id:1512,label:'C519',mandatory:'C',shortDesc:'RELATED LOCATION ONE IDENTIFICATION',desc:'Identification the first related location by code or name.',repeat:1,length:'',type:'',level:3,children:[
			{id:15120,label:'3223',mandatory:'C',shortDesc:'First related location identifier',desc:'To identify a first related location.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:15121,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:15122,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:15123,label:'3222',mandatory:'C',shortDesc:'First related location name',desc:'Name of first related location.',repeat:1,length:'0..70',type:'an',level:4,children:[]}]},
		{id:1513,label:'C553',mandatory:'C',shortDesc:'RELATED LOCATION TWO IDENTIFICATION',desc:'Identification of second related location by code or name.',repeat:1,length:'',type:'',level:3,children:[
			{id:15130,label:'3233',mandatory:'C',shortDesc:'Second related location identifier',desc:'To identify a second related location.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:15131,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:15132,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:15133,label:'3232',mandatory:'C',shortDesc:'Second related location name',desc:'Name of the second related location.',repeat:1,length:'0..70',type:'an',level:4,children:[]}]},
		{id:1514,label:'5479',mandatory:'C',shortDesc:'RELATION CODE',desc:'Code specifying a relation.',repeat:1,length:'0..3',type:'an',level:3,children:[]}]}]},
{id:16,label:'GRP13',mandatory:'C',shortDesc:'PAC#MEA#GRP14#',desc:'A group of segments identifying the packaging, physical dimensions and marks and numbers for goods referenced by the whole order.',repeat:99,length:'',type:'',level:1,children:[
	{id:160,label:'PAC',mandatory:'M',shortDesc:'PACKAGE',desc:'A segment specifying the number and type of packages for the whole order e.g. number and type of pallets.',repeat:1,length:'',type:'',level:2,children:[
		{id:1600,label:'7224',mandatory:'C',shortDesc:'PACKAGE QUANTITY',desc:'To specify the number of packages.',repeat:1,length:'0..8',type:'n',level:3,children:[]},
		{id:1601,label:'C531',mandatory:'C',shortDesc:'PACKAGING DETAILS',desc:'Packaging level and details, terms and conditions.',repeat:1,length:'',type:'',level:3,children:[
			{id:16010,label:'7075',mandatory:'C',shortDesc:'Packaging level code',desc:'Code specifying a level of packaging.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:16011,label:'7233',mandatory:'C',shortDesc:'Packaging related description code',desc:'Code specifying information related to packaging.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:16012,label:'7073',mandatory:'C',shortDesc:'Packaging terms and conditions code',desc:'Code specifying the packaging terms and conditions.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:1602,label:'C202',mandatory:'C',shortDesc:'PACKAGE TYPE',desc:'Type of package by name or by code from a specified source.',repeat:1,length:'',type:'',level:3,children:[
			{id:16020,label:'7065',mandatory:'C',shortDesc:'Package type description code',desc:'Code specifying the type of package.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:16021,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:16022,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:16023,label:'7064',mandatory:'C',shortDesc:'Type of packages',desc:'Description of the form in which goods are presented.',repeat:1,length:'0..35',type:'an',level:4,children:[]}]},
		{id:1603,label:'C402',mandatory:'C',shortDesc:'PACKAGE TYPE IDENTIFICATION',desc:'Identification of the form in which goods are described.',repeat:1,length:'',type:'',level:3,children:[
			{id:16030,label:'7077',mandatory:'M',shortDesc:'Description format code',desc:'Code specifying the format of a description.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:16031,label:'7064',mandatory:'M',shortDesc:'Type of packages',desc:'Description of the form in which goods are presented.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:16032,label:'7143',mandatory:'C',shortDesc:'Item type identification code',desc:'Coded identification of an item type.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:16033,label:'7064',mandatory:'C',shortDesc:'Type of packages',desc:'Description of the form in which goods are presented.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:16034,label:'7143',mandatory:'C',shortDesc:'Item type identification code',desc:'Coded identification of an item type.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:1604,label:'C532',mandatory:'C',shortDesc:'RETURNABLE PACKAGE DETAILS',desc:'Indication of responsibility for payment and load contents of returnable packages.',repeat:1,length:'',type:'',level:3,children:[
			{id:16040,label:'8395',mandatory:'C',shortDesc:'Returnable package freight payment responsibility code',desc:'Code specifying the responsibility for the freight payment for a returnable package.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:16041,label:'8393',mandatory:'C',shortDesc:'Returnable package load contents code',desc:'Code specifying the load contents for a returnable package.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]}]},
	{id:161,label:'MEA',mandatory:'C',shortDesc:'MEASUREMENTS',desc:'A segment specifying physical measurements of packages described in the PAC segment e.g. package length, weight.',repeat:5,length:'',type:'',level:2,children:[
		{id:1610,label:'6311',mandatory:'M',shortDesc:'MEASUREMENT PURPOSE CODE QUALIFIER',desc:'Code qualifying the purpose of the measurement.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:1611,label:'C502',mandatory:'C',shortDesc:'MEASUREMENT DETAILS',desc:'Identification of measurement type.',repeat:1,length:'',type:'',level:3,children:[
			{id:16110,label:'6313',mandatory:'C',shortDesc:'Measured attribute code',desc:'Code specifying the attribute measured.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:16111,label:'6321',mandatory:'C',shortDesc:'Measurement significance code',desc:'Code specifying the significance of a measurement.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:16112,label:'6155',mandatory:'C',shortDesc:'Non-discrete measurement name code',desc:'Code specifying the name of a non-discrete measurement.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:16113,label:'6154',mandatory:'C',shortDesc:'Non-discrete measurement name',desc:'Name of a non-discrete measurement.',repeat:1,length:'0..70',type:'an',level:4,children:[]}]},
		{id:1612,label:'C174',mandatory:'C',shortDesc:'VALUE/RANGE',desc:'Measurement value and relevant minimum and maximum values of the measurement range.',repeat:1,length:'',type:'',level:3,children:[
			{id:16120,label:'6411',mandatory:'M',shortDesc:'Measurement unit code',desc:'Code specifying the unit of measurement.',repeat:1,length:'0..8',type:'an',level:4,children:[]},
			{id:16121,label:'6314',mandatory:'C',shortDesc:'Measure',desc:'To specify the value of a measurement.',repeat:1,length:'0..18',type:'an',level:4,children:[]},
			{id:16122,label:'6162',mandatory:'C',shortDesc:'Range minimum quantity',desc:'To specify the minimum value of a range.',repeat:1,length:'0..18',type:'n',level:4,children:[]},
			{id:16123,label:'6152',mandatory:'C',shortDesc:'Range maximum quantity',desc:'To specify the maximum value of a range.',repeat:1,length:'0..18',type:'n',level:4,children:[]},
			{id:16124,label:'6432',mandatory:'C',shortDesc:'Significant digits quantity',desc:'Count of the number of significant digits.',repeat:1,length:'0..2',type:'n',level:4,children:[]}]},
		{id:1613,label:'7383',mandatory:'C',shortDesc:'SURFACE OR LAYER CODE',desc:'Code specifying the surface or layer of an object.',repeat:1,length:'0..3',type:'an',level:3,children:[]}]},
	{id:162,label:'GRP14',mandatory:'C',shortDesc:'PCI#RFF#DTM#GIN#',desc:'A group of segments specifying the markings and labels on individual physical units.',repeat:5,length:'',type:'',level:2,children:[
		{id:1620,label:'PCI',mandatory:'M',shortDesc:'PACKAGE IDENTIFICATION',desc:'A segment specifying markings and labels used on individual physical units (packages) described in the PAC segment.',repeat:1,length:'',type:'',level:3,children:[
			{id:16200,label:'4233',mandatory:'C',shortDesc:'MARKING INSTRUCTIONS CODE',desc:'Code specifying instructions for marking.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:16201,label:'C210',mandatory:'C',shortDesc:'MARKS & LABELS',desc:'Shipping marks on packages in free text; one to ten lines.',repeat:1,length:'',type:'',level:4,children:[
				{id:162010,label:'7102',mandatory:'M',shortDesc:'Shipping marks description',desc:'Free form description of the shipping marks.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:162011,label:'7102',mandatory:'C',shortDesc:'Shipping marks description',desc:'Free form description of the shipping marks.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:162012,label:'7102',mandatory:'C',shortDesc:'Shipping marks description',desc:'Free form description of the shipping marks.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:162013,label:'7102',mandatory:'C',shortDesc:'Shipping marks description',desc:'Free form description of the shipping marks.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:162014,label:'7102',mandatory:'C',shortDesc:'Shipping marks description',desc:'Free form description of the shipping marks.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:162015,label:'7102',mandatory:'C',shortDesc:'Shipping marks description',desc:'Free form description of the shipping marks.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:162016,label:'7102',mandatory:'C',shortDesc:'Shipping marks description',desc:'Free form description of the shipping marks.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:162017,label:'7102',mandatory:'C',shortDesc:'Shipping marks description',desc:'Free form description of the shipping marks.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:162018,label:'7102',mandatory:'C',shortDesc:'Shipping marks description',desc:'Free form description of the shipping marks.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:162019,label:'7102',mandatory:'C',shortDesc:'Shipping marks description',desc:'Free form description of the shipping marks.',repeat:1,length:'0..35',type:'an',level:5,children:[]}]},
			{id:16202,label:'8169',mandatory:'C',shortDesc:'FULL OR EMPTY INDICATOR CODE',desc:'Code indicating whether an object is full or empty.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:16203,label:'C827',mandatory:'C',shortDesc:'TYPE OF MARKING',desc:'Specification of the type of marking that reflects the method that was used and the conventions adhered to for marking (e.g. of packages).',repeat:1,length:'',type:'',level:4,children:[
				{id:162030,label:'7511',mandatory:'M',shortDesc:'Marking type code',desc:'Code specifying the type of marking.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:162031,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:162032,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]}]},
		{id:1621,label:'RFF',mandatory:'C',shortDesc:'REFERENCE',desc:'A segment identifying the master label number.',repeat:1,length:'',type:'',level:3,children:[
			{id:16210,label:'C506',mandatory:'M',shortDesc:'REFERENCE',desc:'Identification of a reference.',repeat:1,length:'',type:'',level:4,children:[
				{id:162100,label:'1153',mandatory:'M',shortDesc:'Reference code qualifier',desc:'Code qualifying a reference.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:162101,label:'1154',mandatory:'C',shortDesc:'Reference identifier',desc:'Identifies a reference.',repeat:1,length:'0..70',type:'an',level:5,children:[]},
				{id:162102,label:'1156',mandatory:'C',shortDesc:'Document line identifier',desc:'To identify a line of a document.',repeat:1,length:'0..6',type:'an',level:5,children:[]},
				{id:162103,label:'1056',mandatory:'C',shortDesc:'Version identifier',desc:'To identify a version.',repeat:1,length:'0..9',type:'an',level:5,children:[]},
				{id:162104,label:'1060',mandatory:'C',shortDesc:'Revision identifier',desc:'To identify a revision.',repeat:1,length:'0..6',type:'an',level:5,children:[]}]}]},
		{id:1622,label:'DTM',mandatory:'C',shortDesc:'DATE/TIME/PERIOD',desc:'A segment specifying the dates relevant to the package markings.',repeat:5,length:'',type:'',level:3,children:[
			{id:16220,label:'C507',mandatory:'M',shortDesc:'DATE/TIME/PERIOD',desc:'Date and/or time, or period relevant to the specified date/time/period type.',repeat:1,length:'',type:'',level:4,children:[
				{id:162200,label:'2005',mandatory:'M',shortDesc:'Date or time or period function code qualifier',desc:'Code qualifying the function of a date, time or period.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:162201,label:'2380',mandatory:'C',shortDesc:'Date or time or period text',desc:'The value of a date, a date and time, a time or of a period in a specified representation.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:162202,label:'2379',mandatory:'C',shortDesc:'Date or time or period format code',desc:'Code specifying the representation of a date, time or period.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]}]},
		{id:1623,label:'GIN',mandatory:'C',shortDesc:'GOODS IDENTITY NUMBER',desc:'A segment identifying the number or ranges of numbers for use with the package markings.',repeat:10,length:'',type:'',level:3,children:[
			{id:16230,label:'7405',mandatory:'M',shortDesc:'OBJECT IDENTIFICATION CODE QUALIFIER',desc:'Code qualifying the identification of an object.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:16231,label:'C208',mandatory:'M',shortDesc:'IDENTITY NUMBER RANGE',desc:'Goods item identification numbers, start and end of consecutively numbered range.',repeat:1,length:'',type:'',level:4,children:[
				{id:162310,label:'7402',mandatory:'M',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:162311,label:'7402',mandatory:'C',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:5,children:[]}]},
			{id:16232,label:'C208',mandatory:'C',shortDesc:'IDENTITY NUMBER RANGE',desc:'Goods item identification numbers, start and end of consecutively numbered range.',repeat:1,length:'',type:'',level:4,children:[
				{id:162320,label:'7402',mandatory:'M',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:162321,label:'7402',mandatory:'C',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:5,children:[]}]},
			{id:16233,label:'C208',mandatory:'C',shortDesc:'IDENTITY NUMBER RANGE',desc:'Goods item identification numbers, start and end of consecutively numbered range.',repeat:1,length:'',type:'',level:4,children:[
				{id:162330,label:'7402',mandatory:'M',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:162331,label:'7402',mandatory:'C',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:5,children:[]}]},
			{id:16234,label:'C208',mandatory:'C',shortDesc:'IDENTITY NUMBER RANGE',desc:'Goods item identification numbers, start and end of consecutively numbered range.',repeat:1,length:'',type:'',level:4,children:[
				{id:162340,label:'7402',mandatory:'M',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:162341,label:'7402',mandatory:'C',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:5,children:[]}]},
			{id:16235,label:'C208',mandatory:'C',shortDesc:'IDENTITY NUMBER RANGE',desc:'Goods item identification numbers, start and end of consecutively numbered range.',repeat:1,length:'',type:'',level:4,children:[
				{id:162350,label:'7402',mandatory:'M',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:162351,label:'7402',mandatory:'C',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:5,children:[]}]}]}]}]},
{id:17,label:'GRP15',mandatory:'C',shortDesc:'EQD#HAN#MEA#FTX#',desc:'A group of segments providing information relating to equipment identification and ownership, handling and identification of hazardous materials, relating to the whole order.',repeat:10,length:'',type:'',level:1,children:[
	{id:170,label:'EQD',mandatory:'M',shortDesc:'EQUIPMENT DETAILS',desc:'A segment to define information regarding equipment to be used in conjunction with the whole order, and if required, to indicate responsibility for supply of the equipment.',repeat:1,length:'',type:'',level:2,children:[
		{id:1700,label:'8053',mandatory:'M',shortDesc:'EQUIPMENT TYPE CODE QUALIFIER',desc:'Code qualifying a type of equipment.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:1701,label:'C237',mandatory:'C',shortDesc:'EQUIPMENT IDENTIFICATION',desc:'Marks (letters/numbers) identifying equipment.',repeat:1,length:'',type:'',level:3,children:[
			{id:17010,label:'8260',mandatory:'C',shortDesc:'Equipment identifier',desc:'To identify equipment.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:17011,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:17012,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:17013,label:'3207',mandatory:'C',shortDesc:'Country identifier',desc:'Identification of the name of the country or other geographical entity as defined in ISO 3166-1 and UN/ECE Recommendation 3.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:1702,label:'C224',mandatory:'C',shortDesc:'EQUIPMENT SIZE AND TYPE',desc:'Code and or name identifying size and type of equipment. Code preferred.',repeat:1,length:'',type:'',level:3,children:[
			{id:17020,label:'8155',mandatory:'C',shortDesc:'Equipment size and type description code',desc:'Code specifying the size and type of equipment.',repeat:1,length:'0..10',type:'an',level:4,children:[]},
			{id:17021,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:17022,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:17023,label:'8154',mandatory:'C',shortDesc:'Equipment size and type description',desc:'Free form description of the size and type of equipment.',repeat:1,length:'0..35',type:'an',level:4,children:[]}]},
		{id:1703,label:'8077',mandatory:'C',shortDesc:'EQUIPMENT SUPPLIER CODE',desc:'Code specifying the party that is the supplier of the equipment.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:1704,label:'8249',mandatory:'C',shortDesc:'EQUIPMENT STATUS CODE',desc:'Code specifying the status of equipment.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:1705,label:'8169',mandatory:'C',shortDesc:'FULL OR EMPTY INDICATOR CODE',desc:'Code indicating whether an object is full or empty.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:1706,label:'4233',mandatory:'C',shortDesc:'MARKING INSTRUCTIONS CODE',desc:'Code specifying instructions for marking.',repeat:1,length:'0..3',type:'an',level:3,children:[]}]},
	{id:171,label:'HAN',mandatory:'C',shortDesc:'HANDLING INSTRUCTIONS',desc:'A segment providing information on required handling of materials and additionally, if required, identifying hazardous materials in the whole order.',repeat:5,length:'',type:'',level:2,children:[
		{id:1710,label:'C524',mandatory:'C',shortDesc:'HANDLING INSTRUCTIONS',desc:'Instruction for the handling of goods, products or articles in shipment, storage etc.',repeat:1,length:'',type:'',level:3,children:[
			{id:17100,label:'4079',mandatory:'C',shortDesc:'Handling instruction description code',desc:'Code specifying a handling instruction.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:17101,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:17102,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:17103,label:'4078',mandatory:'C',shortDesc:'Handling instruction description',desc:'Free form description of a handling instruction.',repeat:1,length:'0..512',type:'an',level:4,children:[]}]},
		{id:1711,label:'C218',mandatory:'C',shortDesc:'HAZARDOUS MATERIAL',desc:'To specify a hazardous material.',repeat:1,length:'',type:'',level:3,children:[
			{id:17110,label:'7419',mandatory:'C',shortDesc:'Hazardous material category name code',desc:'Code specifying a kind of hazard for a material.',repeat:1,length:'0..7',type:'an',level:4,children:[]},
			{id:17111,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:17112,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:17113,label:'7418',mandatory:'C',shortDesc:'Hazardous material category name',desc:'Name of a kind of hazard for a material.',repeat:1,length:'0..35',type:'an',level:4,children:[]}]}]},
	{id:172,label:'MEA',mandatory:'C',shortDesc:'MEASUREMENTS',desc:'A segment providing measurement information for the equipment.',repeat:5,length:'',type:'',level:2,children:[
		{id:1720,label:'6311',mandatory:'M',shortDesc:'MEASUREMENT PURPOSE CODE QUALIFIER',desc:'Code qualifying the purpose of the measurement.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:1721,label:'C502',mandatory:'C',shortDesc:'MEASUREMENT DETAILS',desc:'Identification of measurement type.',repeat:1,length:'',type:'',level:3,children:[
			{id:17210,label:'6313',mandatory:'C',shortDesc:'Measured attribute code',desc:'Code specifying the attribute measured.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:17211,label:'6321',mandatory:'C',shortDesc:'Measurement significance code',desc:'Code specifying the significance of a measurement.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:17212,label:'6155',mandatory:'C',shortDesc:'Non-discrete measurement name code',desc:'Code specifying the name of a non-discrete measurement.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:17213,label:'6154',mandatory:'C',shortDesc:'Non-discrete measurement name',desc:'Name of a non-discrete measurement.',repeat:1,length:'0..70',type:'an',level:4,children:[]}]},
		{id:1722,label:'C174',mandatory:'C',shortDesc:'VALUE/RANGE',desc:'Measurement value and relevant minimum and maximum values of the measurement range.',repeat:1,length:'',type:'',level:3,children:[
			{id:17220,label:'6411',mandatory:'M',shortDesc:'Measurement unit code',desc:'Code specifying the unit of measurement.',repeat:1,length:'0..8',type:'an',level:4,children:[]},
			{id:17221,label:'6314',mandatory:'C',shortDesc:'Measure',desc:'To specify the value of a measurement.',repeat:1,length:'0..18',type:'an',level:4,children:[]},
			{id:17222,label:'6162',mandatory:'C',shortDesc:'Range minimum quantity',desc:'To specify the minimum value of a range.',repeat:1,length:'0..18',type:'n',level:4,children:[]},
			{id:17223,label:'6152',mandatory:'C',shortDesc:'Range maximum quantity',desc:'To specify the maximum value of a range.',repeat:1,length:'0..18',type:'n',level:4,children:[]},
			{id:17224,label:'6432',mandatory:'C',shortDesc:'Significant digits quantity',desc:'Count of the number of significant digits.',repeat:1,length:'0..2',type:'n',level:4,children:[]}]},
		{id:1723,label:'7383',mandatory:'C',shortDesc:'SURFACE OR LAYER CODE',desc:'Code specifying the surface or layer of an object.',repeat:1,length:'0..3',type:'an',level:3,children:[]}]},
	{id:173,label:'FTX',mandatory:'C',shortDesc:'FREE TEXT',desc:'A segment with free text information, in coded or clear form, used when additional information is needed but cannot be accommodated within other segments. In computer to computer exchanges such text will normally require the receiver to process this segment manually.',repeat:5,length:'',type:'',level:2,children:[
		{id:1730,label:'4451',mandatory:'M',shortDesc:'TEXT SUBJECT CODE QUALIFIER',desc:'Code qualifying the subject of the text.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:1731,label:'4453',mandatory:'C',shortDesc:'FREE TEXT FUNCTION CODE',desc:'Code specifying the function of free text.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:1732,label:'C107',mandatory:'C',shortDesc:'TEXT REFERENCE',desc:'Coded reference to a standard text and its source.',repeat:1,length:'',type:'',level:3,children:[
			{id:17320,label:'4441',mandatory:'M',shortDesc:'Free text description code',desc:'Code specifying free form text.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:17321,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:17322,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:1733,label:'C108',mandatory:'C',shortDesc:'TEXT LITERAL',desc:'Free text; one to five lines.',repeat:1,length:'',type:'',level:3,children:[
			{id:17330,label:'4440',mandatory:'M',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:4,children:[]},
			{id:17331,label:'4440',mandatory:'C',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:4,children:[]},
			{id:17332,label:'4440',mandatory:'C',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:4,children:[]},
			{id:17333,label:'4440',mandatory:'C',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:4,children:[]},
			{id:17334,label:'4440',mandatory:'C',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:4,children:[]}]},
		{id:1734,label:'3453',mandatory:'C',shortDesc:'LANGUAGE NAME CODE',desc:'Code specifying the language name.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:1735,label:'4447',mandatory:'C',shortDesc:'FREE TEXT FORMAT CODE',desc:'Code specifying the format of free text.',repeat:1,length:'0..3',type:'an',level:3,children:[]}]}]},
{id:18,label:'GRP16',mandatory:'C',shortDesc:'SCC#FTX#RFF#GRP17#',desc:'A group of segments specifying requested delivery schedules relating to quantities, frequencies, dates and references, required for the whole order.',repeat:10,length:'',type:'',level:1,children:[
	{id:180,label:'SCC',mandatory:'M',shortDesc:'SCHEDULING CONDITIONS',desc:'A segment specifying the type and status of the schedule being given, and optionally defining a pattern to be established e.g. firm or proposed delivery schedule for a weekly pattern.',repeat:1,length:'',type:'',level:2,children:[
		{id:1800,label:'4017',mandatory:'M',shortDesc:'DELIVERY PLAN COMMITMENT LEVEL CODE',desc:'Code specifying the level of commitment to a delivery plan.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:1801,label:'4493',mandatory:'C',shortDesc:'DELIVERY INSTRUCTION CODE',desc:'Code specifying a delivery instruction.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:1802,label:'C329',mandatory:'C',shortDesc:'PATTERN DESCRIPTION',desc:'Shipment, delivery or production interval pattern and timing.',repeat:1,length:'',type:'',level:3,children:[
			{id:18020,label:'2013',mandatory:'C',shortDesc:'Frequency code',desc:'Code specifying the rate of recurrence.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:18021,label:'2015',mandatory:'C',shortDesc:'Despatch pattern code',desc:'Code specifying a despatch pattern.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:18022,label:'2017',mandatory:'C',shortDesc:'Despatch pattern timing code',desc:'Code specifying a set of dates/times within a despatch pattern.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]}]},
	{id:181,label:'FTX',mandatory:'C',shortDesc:'FREE TEXT',desc:'A segment with free text information, in coded or clear form, to give further clarification to scheduling instructions. In computer to computer exchanges such text will normally require the receiver to process this segment manually.',repeat:5,length:'',type:'',level:2,children:[
		{id:1810,label:'4451',mandatory:'M',shortDesc:'TEXT SUBJECT CODE QUALIFIER',desc:'Code qualifying the subject of the text.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:1811,label:'4453',mandatory:'C',shortDesc:'FREE TEXT FUNCTION CODE',desc:'Code specifying the function of free text.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:1812,label:'C107',mandatory:'C',shortDesc:'TEXT REFERENCE',desc:'Coded reference to a standard text and its source.',repeat:1,length:'',type:'',level:3,children:[
			{id:18120,label:'4441',mandatory:'M',shortDesc:'Free text description code',desc:'Code specifying free form text.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:18121,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:18122,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:1813,label:'C108',mandatory:'C',shortDesc:'TEXT LITERAL',desc:'Free text; one to five lines.',repeat:1,length:'',type:'',level:3,children:[
			{id:18130,label:'4440',mandatory:'M',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:4,children:[]},
			{id:18131,label:'4440',mandatory:'C',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:4,children:[]},
			{id:18132,label:'4440',mandatory:'C',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:4,children:[]},
			{id:18133,label:'4440',mandatory:'C',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:4,children:[]},
			{id:18134,label:'4440',mandatory:'C',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:4,children:[]}]},
		{id:1814,label:'3453',mandatory:'C',shortDesc:'LANGUAGE NAME CODE',desc:'Code specifying the language name.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:1815,label:'4447',mandatory:'C',shortDesc:'FREE TEXT FORMAT CODE',desc:'Code specifying the format of free text.',repeat:1,length:'0..3',type:'an',level:3,children:[]}]},
	{id:182,label:'RFF',mandatory:'C',shortDesc:'REFERENCE',desc:'A segment for specifying the reference for schedule.',repeat:5,length:'',type:'',level:2,children:[
		{id:1820,label:'C506',mandatory:'M',shortDesc:'REFERENCE',desc:'Identification of a reference.',repeat:1,length:'',type:'',level:3,children:[
			{id:18200,label:'1153',mandatory:'M',shortDesc:'Reference code qualifier',desc:'Code qualifying a reference.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:18201,label:'1154',mandatory:'C',shortDesc:'Reference identifier',desc:'Identifies a reference.',repeat:1,length:'0..70',type:'an',level:4,children:[]},
			{id:18202,label:'1156',mandatory:'C',shortDesc:'Document line identifier',desc:'To identify a line of a document.',repeat:1,length:'0..6',type:'an',level:4,children:[]},
			{id:18203,label:'1056',mandatory:'C',shortDesc:'Version identifier',desc:'To identify a version.',repeat:1,length:'0..9',type:'an',level:4,children:[]},
			{id:18204,label:'1060',mandatory:'C',shortDesc:'Revision identifier',desc:'To identify a revision.',repeat:1,length:'0..6',type:'an',level:4,children:[]}]}]},
	{id:183,label:'GRP17',mandatory:'C',shortDesc:'QTY#DTM#',desc:'A group of segments to specify the scheduled quantities, date/time of the schedule, and where required, the reference of the schedule.',repeat:10,length:'',type:'',level:2,children:[
		{id:1830,label:'QTY',mandatory:'M',shortDesc:'QUANTITY',desc:'A segment to specify pertinent quantities relating to the schedule and pattern established in the SCC segment, e.g. delivery quantity.',repeat:1,length:'',type:'',level:3,children:[
			{id:18300,label:'C186',mandatory:'M',shortDesc:'QUANTITY DETAILS',desc:'Quantity information in a transaction, qualified when relevant.',repeat:1,length:'',type:'',level:4,children:[
				{id:183000,label:'6063',mandatory:'M',shortDesc:'Quantity type code qualifier',desc:'Code qualifying the type of quantity.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:183001,label:'6060',mandatory:'M',shortDesc:'Quantity',desc:'Alphanumeric representation of a quantity.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:183002,label:'6411',mandatory:'C',shortDesc:'Measurement unit code',desc:'Code specifying the unit of measurement.',repeat:1,length:'0..8',type:'an',level:5,children:[]}]}]},
		{id:1831,label:'DTM',mandatory:'C',shortDesc:'DATE/TIME/PERIOD',desc:'A segment indicating the date/time details relating to the quantity and schedule used to indicate date/time ranges e.g. start and end dates for a delivery pattern, or delivery window.',repeat:5,length:'',type:'',level:3,children:[
			{id:18310,label:'C507',mandatory:'M',shortDesc:'DATE/TIME/PERIOD',desc:'Date and/or time, or period relevant to the specified date/time/period type.',repeat:1,length:'',type:'',level:4,children:[
				{id:183100,label:'2005',mandatory:'M',shortDesc:'Date or time or period function code qualifier',desc:'Code qualifying the function of a date, time or period.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:183101,label:'2380',mandatory:'C',shortDesc:'Date or time or period text',desc:'The value of a date, a date and time, a time or of a period in a specified representation.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:183102,label:'2379',mandatory:'C',shortDesc:'Date or time or period format code',desc:'Code specifying the representation of a date, time or period.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]}]}]}]},
{id:19,label:'GRP18',mandatory:'C',shortDesc:'APR#DTM#RNG#',desc:'A group of segments providing information concerning pricing related to the type of trade, and where appropriate, indication of quantities, dates/periods or amounts.',repeat:25,length:'',type:'',level:1,children:[
	{id:190,label:'APR',mandatory:'M',shortDesc:'ADDITIONAL PRICE INFORMATION',desc:'A segment to identify additional pricing information such as a price multiplier, the class or type of trade and additionally identifying the reason for any changes.',repeat:1,length:'',type:'',level:2,children:[
		{id:1900,label:'4043',mandatory:'C',shortDesc:'TRADE CLASS CODE',desc:'Code identifying the class of trade.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:1901,label:'C138',mandatory:'C',shortDesc:'PRICE MULTIPLIER INFORMATION',desc:'Price multiplier and its identification.',repeat:1,length:'',type:'',level:3,children:[
			{id:19010,label:'5394',mandatory:'M',shortDesc:'Price multiplier rate',desc:'To specify the rate of a price multiplier.',repeat:1,length:'0..12',type:'n',level:4,children:[]},
			{id:19011,label:'5393',mandatory:'C',shortDesc:'Price multiplier type code qualifier',desc:'Code qualifying the type of price multiplier.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:1902,label:'C960',mandatory:'C',shortDesc:'REASON FOR CHANGE',desc:'Code and/or description of the reason for a change.',repeat:1,length:'',type:'',level:3,children:[
			{id:19020,label:'4295',mandatory:'C',shortDesc:'Change reason description code',desc:'Code specifying the reason for a change.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:19021,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:19022,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:19023,label:'4294',mandatory:'C',shortDesc:'Change reason description',desc:'Free form description of the reason for change.',repeat:1,length:'0..35',type:'an',level:4,children:[]}]}]},
	{id:191,label:'DTM',mandatory:'C',shortDesc:'DATE/TIME/PERIOD',desc:'A segment to identify the date/time/period information related to the price change e.g. period of validity.',repeat:5,length:'',type:'',level:2,children:[
		{id:1910,label:'C507',mandatory:'M',shortDesc:'DATE/TIME/PERIOD',desc:'Date and/or time, or period relevant to the specified date/time/period type.',repeat:1,length:'',type:'',level:3,children:[
			{id:19100,label:'2005',mandatory:'M',shortDesc:'Date or time or period function code qualifier',desc:'Code qualifying the function of a date, time or period.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:19101,label:'2380',mandatory:'C',shortDesc:'Date or time or period text',desc:'The value of a date, a date and time, a time or of a period in a specified representation.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:19102,label:'2379',mandatory:'C',shortDesc:'Date or time or period format code',desc:'Code specifying the representation of a date, time or period.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]}]},
	{id:192,label:'RNG',mandatory:'C',shortDesc:'RANGE DETAILS',desc:'A segment to identify the quantity or amount ranges to which the additional price information applies.',repeat:1,length:'',type:'',level:2,children:[
		{id:1920,label:'6167',mandatory:'M',shortDesc:'RANGE TYPE CODE QUALIFIER',desc:'Code qualifying a type of range.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:1921,label:'C280',mandatory:'C',shortDesc:'RANGE',desc:'Range minimum and maximum limits.',repeat:1,length:'',type:'',level:3,children:[
			{id:19210,label:'6411',mandatory:'M',shortDesc:'Measurement unit code',desc:'Code specifying the unit of measurement.',repeat:1,length:'0..8',type:'an',level:4,children:[]},
			{id:19211,label:'6162',mandatory:'C',shortDesc:'Range minimum quantity',desc:'To specify the minimum value of a range.',repeat:1,length:'0..18',type:'n',level:4,children:[]},
			{id:19212,label:'6152',mandatory:'C',shortDesc:'Range maximum quantity',desc:'To specify the maximum value of a range.',repeat:1,length:'0..18',type:'n',level:4,children:[]}]}]}]},
{id:20,label:'GRP19',mandatory:'C',shortDesc:'ALC#ALI#DTM#GRP20#GRP21#GRP22#GRP23#GRP24#',desc:'A group of segments specifying allowances and charges for the whole order. The allowance or charge specified within this Segment group may either relate to the total order in which case it cannot be overridden at detail level, or it can relate to the line items as a default allowance/charge and can be overridden by the allowance and charge segment group within the detail section. Where relevant, additional information, tax and alternate currency details are to be indicated in the tax and monetary amount segments. The basis for the calculation of the allowance/charge may be a quantity, a percentage, an amount or a rate and one of the appropriate subordinate segment group(s) should be used accordingly.',repeat:99,length:'',type:'',level:1,children:[
	{id:200,label:'ALC',mandatory:'M',shortDesc:'ALLOWANCE OR CHARGE',desc:'A segment identifying the charge or allowance and, where necessary its calculation sequence.',repeat:1,length:'',type:'',level:2,children:[
		{id:2000,label:'5463',mandatory:'M',shortDesc:'ALLOWANCE OR CHARGE CODE QUALIFIER',desc:'Code qualifying an allowance or charge.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2001,label:'C552',mandatory:'C',shortDesc:'ALLOWANCE/CHARGE INFORMATION',desc:'Identification of allowance/charge information by number and/or code.',repeat:1,length:'',type:'',level:3,children:[
			{id:20010,label:'1230',mandatory:'C',shortDesc:'Allowance or charge identifier',desc:'To identify an allowance or charge.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:20011,label:'5189',mandatory:'C',shortDesc:'Allowance or charge identification code',desc:'Code specifying the identification of an allowance or charge.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:2002,label:'4471',mandatory:'C',shortDesc:'SETTLEMENT MEANS CODE',desc:'Code specifying the means of settlement.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2003,label:'1227',mandatory:'C',shortDesc:'CALCULATION SEQUENCE CODE',desc:'Code specifying a calculation sequence.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2004,label:'C214',mandatory:'C',shortDesc:'SPECIAL SERVICES IDENTIFICATION',desc:'Identification of a special service by a code from a specified source or by description.',repeat:1,length:'',type:'',level:3,children:[
			{id:20040,label:'7161',mandatory:'C',shortDesc:'Special service description code',desc:'Code specifying a special service.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:20041,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:20042,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:20043,label:'7160',mandatory:'C',shortDesc:'Special service description',desc:'Free form description of a special service.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:20044,label:'7160',mandatory:'C',shortDesc:'Special service description',desc:'Free form description of a special service.',repeat:1,length:'0..35',type:'an',level:4,children:[]}]}]},
	{id:201,label:'ALI',mandatory:'C',shortDesc:'ADDITIONAL INFORMATION',desc:'A segment indicating that the allowance or charge specified is subject to special conditions owing to origin, customs preference or commercial factors.',repeat:5,length:'',type:'',level:2,children:[
		{id:2010,label:'3239',mandatory:'C',shortDesc:'COUNTRY OF ORIGIN IDENTIFIER',desc:'To identify the country in which the goods have been produced or manufactured, according to criteria laid down for the application of the Customs tariff or quantitative restrictions, or any measure related to trade.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2011,label:'9213',mandatory:'C',shortDesc:'DUTY REGIME TYPE CODE',desc:'Code specifying a type of duty regime.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2012,label:'4183',mandatory:'C',shortDesc:'SPECIAL CONDITION CODE',desc:'Code specifying a special condition.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2013,label:'4183',mandatory:'C',shortDesc:'SPECIAL CONDITION CODE',desc:'Code specifying a special condition.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2014,label:'4183',mandatory:'C',shortDesc:'SPECIAL CONDITION CODE',desc:'Code specifying a special condition.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2015,label:'4183',mandatory:'C',shortDesc:'SPECIAL CONDITION CODE',desc:'Code specifying a special condition.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2016,label:'4183',mandatory:'C',shortDesc:'SPECIAL CONDITION CODE',desc:'Code specifying a special condition.',repeat:1,length:'0..3',type:'an',level:3,children:[]}]},
	{id:202,label:'DTM',mandatory:'C',shortDesc:'DATE/TIME/PERIOD',desc:'A segment to identify the date/time/period information related to the allowance or charge, e.g. period of validity.',repeat:5,length:'',type:'',level:2,children:[
		{id:2020,label:'C507',mandatory:'M',shortDesc:'DATE/TIME/PERIOD',desc:'Date and/or time, or period relevant to the specified date/time/period type.',repeat:1,length:'',type:'',level:3,children:[
			{id:20200,label:'2005',mandatory:'M',shortDesc:'Date or time or period function code qualifier',desc:'Code qualifying the function of a date, time or period.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:20201,label:'2380',mandatory:'C',shortDesc:'Date or time or period text',desc:'The value of a date, a date and time, a time or of a period in a specified representation.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:20202,label:'2379',mandatory:'C',shortDesc:'Date or time or period format code',desc:'Code specifying the representation of a date, time or period.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]}]},
	{id:203,label:'GRP20',mandatory:'C',shortDesc:'QTY#RNG#',desc:'A group of segments specifying the quantity of the allowance or charge with its measure unit specifier. A range to which the allowance or charge applies may be specified e.g. an allowance of a free quantity of 20 pieces may be specified if the goods quantity ordered is greater than 1000 pieces.',repeat:1,length:'',type:'',level:2,children:[
		{id:2030,label:'QTY',mandatory:'M',shortDesc:'QUANTITY',desc:'A segment identifying the type of quantity and the quantity related to the allowance or charge.',repeat:1,length:'',type:'',level:3,children:[
			{id:20300,label:'C186',mandatory:'M',shortDesc:'QUANTITY DETAILS',desc:'Quantity information in a transaction, qualified when relevant.',repeat:1,length:'',type:'',level:4,children:[
				{id:203000,label:'6063',mandatory:'M',shortDesc:'Quantity type code qualifier',desc:'Code qualifying the type of quantity.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:203001,label:'6060',mandatory:'M',shortDesc:'Quantity',desc:'Alphanumeric representation of a quantity.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:203002,label:'6411',mandatory:'C',shortDesc:'Measurement unit code',desc:'Code specifying the unit of measurement.',repeat:1,length:'0..8',type:'an',level:5,children:[]}]}]},
		{id:2031,label:'RNG',mandatory:'C',shortDesc:'RANGE DETAILS',desc:'A segment specifying, if required, the range to which the allowance or charge applies.',repeat:1,length:'',type:'',level:3,children:[
			{id:20310,label:'6167',mandatory:'M',shortDesc:'RANGE TYPE CODE QUALIFIER',desc:'Code qualifying a type of range.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:20311,label:'C280',mandatory:'C',shortDesc:'RANGE',desc:'Range minimum and maximum limits.',repeat:1,length:'',type:'',level:4,children:[
				{id:203110,label:'6411',mandatory:'M',shortDesc:'Measurement unit code',desc:'Code specifying the unit of measurement.',repeat:1,length:'0..8',type:'an',level:5,children:[]},
				{id:203111,label:'6162',mandatory:'C',shortDesc:'Range minimum quantity',desc:'To specify the minimum value of a range.',repeat:1,length:'0..18',type:'n',level:5,children:[]},
				{id:203112,label:'6152',mandatory:'C',shortDesc:'Range maximum quantity',desc:'To specify the maximum value of a range.',repeat:1,length:'0..18',type:'n',level:5,children:[]}]}]}]},
	{id:204,label:'GRP21',mandatory:'C',shortDesc:'PCD#RNG#',desc:'A group of segments specifying the percentage for the allowance or charge, e.g. The allowance/charge amount is calculated as 5% of the goods value or a price reduction of 5% may be specified if the goods quantity ordered is within the range 5 tons to 10 tons.',repeat:1,length:'',type:'',level:2,children:[
		{id:2040,label:'PCD',mandatory:'M',shortDesc:'PERCENTAGE DETAILS',desc:'A segment identifying the percentage and the percentage basis for the calculation of the allowance or charge.',repeat:1,length:'',type:'',level:3,children:[
			{id:20400,label:'C501',mandatory:'M',shortDesc:'PERCENTAGE DETAILS',desc:'Percentage relating to a specified basis.',repeat:1,length:'',type:'',level:4,children:[
				{id:204000,label:'5245',mandatory:'M',shortDesc:'Percentage type code qualifier',desc:'Code qualifying the type of percentage.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:204001,label:'5482',mandatory:'C',shortDesc:'Percentage',desc:'To specify a percentage.',repeat:1,length:'0..10',type:'n',level:5,children:[]},
				{id:204002,label:'5249',mandatory:'C',shortDesc:'Percentage basis identification code',desc:'Code specifying the basis on which a percentage is calculated.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:204003,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:204004,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]},
			{id:20401,label:'4405',mandatory:'C',shortDesc:'STATUS DESCRIPTION CODE',desc:'Code specifying a status.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:2041,label:'RNG',mandatory:'C',shortDesc:'RANGE DETAILS',desc:'A segment specifying, if required, a range for the application of the percentage.',repeat:1,length:'',type:'',level:3,children:[
			{id:20410,label:'6167',mandatory:'M',shortDesc:'RANGE TYPE CODE QUALIFIER',desc:'Code qualifying a type of range.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:20411,label:'C280',mandatory:'C',shortDesc:'RANGE',desc:'Range minimum and maximum limits.',repeat:1,length:'',type:'',level:4,children:[
				{id:204110,label:'6411',mandatory:'M',shortDesc:'Measurement unit code',desc:'Code specifying the unit of measurement.',repeat:1,length:'0..8',type:'an',level:5,children:[]},
				{id:204111,label:'6162',mandatory:'C',shortDesc:'Range minimum quantity',desc:'To specify the minimum value of a range.',repeat:1,length:'0..18',type:'n',level:5,children:[]},
				{id:204112,label:'6152',mandatory:'C',shortDesc:'Range maximum quantity',desc:'To specify the maximum value of a range.',repeat:1,length:'0..18',type:'n',level:5,children:[]}]}]}]},
	{id:205,label:'GRP22',mandatory:'C',shortDesc:'MOA#RNG#',desc:'A group of segments specifying a monetary amount for an allowance or charge. A range to which the allowance or charge applies can be specified e.g. an allowance of 5000 BEF may be specified if goods value ordered is greater than 100000 BEF.',repeat:2,length:'',type:'',level:2,children:[
		{id:2050,label:'MOA',mandatory:'M',shortDesc:'MONETARY AMOUNT',desc:'A segment identifying the monetary amount for the allowance or charge.',repeat:1,length:'',type:'',level:3,children:[
			{id:20500,label:'C516',mandatory:'M',shortDesc:'MONETARY AMOUNT',desc:'Amount of goods or services stated as a monetary amount in a specified currency.',repeat:1,length:'',type:'',level:4,children:[
				{id:205000,label:'5025',mandatory:'M',shortDesc:'Monetary amount type code qualifier',desc:'Code qualifying the type of monetary amount.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:205001,label:'5004',mandatory:'C',shortDesc:'Monetary amount',desc:'To specify a monetary amount.',repeat:1,length:'0..35',type:'n',level:5,children:[]},
				{id:205002,label:'6345',mandatory:'C',shortDesc:'Currency identification code',desc:'Code specifying a monetary unit.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:205003,label:'6343',mandatory:'C',shortDesc:'Currency type code qualifier',desc:'Code qualifying the type of currency.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:205004,label:'4405',mandatory:'C',shortDesc:'Status description code',desc:'Code specifying a status.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]}]},
		{id:2051,label:'RNG',mandatory:'C',shortDesc:'RANGE DETAILS',desc:'A segment specifying, if required, a range for the application of the allowance/charge amount.',repeat:1,length:'',type:'',level:3,children:[
			{id:20510,label:'6167',mandatory:'M',shortDesc:'RANGE TYPE CODE QUALIFIER',desc:'Code qualifying a type of range.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:20511,label:'C280',mandatory:'C',shortDesc:'RANGE',desc:'Range minimum and maximum limits.',repeat:1,length:'',type:'',level:4,children:[
				{id:205110,label:'6411',mandatory:'M',shortDesc:'Measurement unit code',desc:'Code specifying the unit of measurement.',repeat:1,length:'0..8',type:'an',level:5,children:[]},
				{id:205111,label:'6162',mandatory:'C',shortDesc:'Range minimum quantity',desc:'To specify the minimum value of a range.',repeat:1,length:'0..18',type:'n',level:5,children:[]},
				{id:205112,label:'6152',mandatory:'C',shortDesc:'Range maximum quantity',desc:'To specify the maximum value of a range.',repeat:1,length:'0..18',type:'n',level:5,children:[]}]}]}]},
	{id:206,label:'GRP23',mandatory:'C',shortDesc:'RTE#RNG#',desc:'A group of segments specifying the rate per unit and basis to which the allowance or charge applies e.g. the allowance/charge amount is 3 DEM per 10 tons.',repeat:1,length:'',type:'',level:2,children:[
		{id:2060,label:'RTE',mandatory:'M',shortDesc:'RATE DETAILS',desc:'A segment specifying the rate per unit and the basis for calculation.',repeat:1,length:'',type:'',level:3,children:[
			{id:20600,label:'C128',mandatory:'M',shortDesc:'RATE DETAILS',desc:'Rate per unit and rate basis.',repeat:1,length:'',type:'',level:4,children:[
				{id:206000,label:'5419',mandatory:'M',shortDesc:'Rate type code qualifier',desc:'Code qualifying the type of rate.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:206001,label:'5420',mandatory:'M',shortDesc:'Unit price basis rate',desc:'To specify the rate per unit specified in the unit price basis.',repeat:1,length:'0..15',type:'n',level:5,children:[]},
				{id:206002,label:'5284',mandatory:'C',shortDesc:'Unit price basis quantity',desc:'To specify the basis for a unit price.',repeat:1,length:'0..9',type:'n',level:5,children:[]},
				{id:206003,label:'6411',mandatory:'C',shortDesc:'Measurement unit code',desc:'Code specifying the unit of measurement.',repeat:1,length:'0..8',type:'an',level:5,children:[]}]},
			{id:20601,label:'4405',mandatory:'C',shortDesc:'STATUS DESCRIPTION CODE',desc:'Code specifying a status.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:2061,label:'RNG',mandatory:'C',shortDesc:'RANGE DETAILS',desc:'A segment specifying, if required, the range for the application of the allowance/charge rate.',repeat:1,length:'',type:'',level:3,children:[
			{id:20610,label:'6167',mandatory:'M',shortDesc:'RANGE TYPE CODE QUALIFIER',desc:'Code qualifying a type of range.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:20611,label:'C280',mandatory:'C',shortDesc:'RANGE',desc:'Range minimum and maximum limits.',repeat:1,length:'',type:'',level:4,children:[
				{id:206110,label:'6411',mandatory:'M',shortDesc:'Measurement unit code',desc:'Code specifying the unit of measurement.',repeat:1,length:'0..8',type:'an',level:5,children:[]},
				{id:206111,label:'6162',mandatory:'C',shortDesc:'Range minimum quantity',desc:'To specify the minimum value of a range.',repeat:1,length:'0..18',type:'n',level:5,children:[]},
				{id:206112,label:'6152',mandatory:'C',shortDesc:'Range maximum quantity',desc:'To specify the maximum value of a range.',repeat:1,length:'0..18',type:'n',level:5,children:[]}]}]}]},
	{id:207,label:'GRP24',mandatory:'C',shortDesc:'TAX#MOA#',desc:'A group of segments specifying tax related information for the allowance or charge.',repeat:5,length:'',type:'',level:2,children:[
		{id:2070,label:'TAX',mandatory:'M',shortDesc:'DUTY/TAX/FEE DETAILS',desc:'A segment specifying the tax type, category and rate, or exemption, related to the allowance or charge.',repeat:1,length:'',type:'',level:3,children:[
			{id:20700,label:'5283',mandatory:'M',shortDesc:'DUTY OR TAX OR FEE FUNCTION CODE QUALIFIER',desc:'Code qualifying the function of a duty or tax or fee.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:20701,label:'C241',mandatory:'C',shortDesc:'DUTY/TAX/FEE TYPE',desc:'Code and/or name identifying duty, tax or fee.',repeat:1,length:'',type:'',level:4,children:[
				{id:207010,label:'5153',mandatory:'C',shortDesc:'Duty or tax or fee type name code',desc:'Code specifying a type of duty, tax or fee.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:207011,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:207012,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:207013,label:'5152',mandatory:'C',shortDesc:'Duty or tax or fee type name',desc:'Name of a type of duty, tax or fee.',repeat:1,length:'0..35',type:'an',level:5,children:[]}]},
			{id:20702,label:'C533',mandatory:'C',shortDesc:'DUTY/TAX/FEE ACCOUNT DETAIL',desc:'Indication of account reference for duties, taxes and/or fees.',repeat:1,length:'',type:'',level:4,children:[
				{id:207020,label:'5289',mandatory:'M',shortDesc:'Duty or tax or fee account code',desc:'Code specifying a duty or tax or fee account.',repeat:1,length:'0..6',type:'an',level:5,children:[]},
				{id:207021,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:207022,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]},
			{id:20703,label:'5286',mandatory:'C',shortDesc:'DUTY OR TAX OR FEE ASSESSMENT BASIS QUANTITY',desc:'To specify the basis on which a duty or tax or fee will be assessed.',repeat:1,length:'0..15',type:'an',level:4,children:[]},
			{id:20704,label:'C243',mandatory:'C',shortDesc:'DUTY/TAX/FEE DETAIL',desc:'Rate of duty/tax/fee applicable to commodities or of tax applicable to services.',repeat:1,length:'',type:'',level:4,children:[
				{id:207040,label:'5279',mandatory:'C',shortDesc:'Duty or tax or fee rate code',desc:'Code specifying a rate of a duty or tax or fee.',repeat:1,length:'0..7',type:'an',level:5,children:[]},
				{id:207041,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:207042,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:207043,label:'5278',mandatory:'C',shortDesc:'Duty or tax or fee rate',desc:'Rate of a duty or tax or fee.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:207044,label:'5273',mandatory:'C',shortDesc:'Duty or tax or fee rate basis code',desc:'Code specifying the basis for a duty or tax or fee rate.',repeat:1,length:'0..12',type:'an',level:5,children:[]},
				{id:207045,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:207046,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]},
			{id:20705,label:'5305',mandatory:'C',shortDesc:'DUTY OR TAX OR FEE CATEGORY CODE',desc:'Code specifying a duty or tax or fee category.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:20706,label:'3446',mandatory:'C',shortDesc:'PARTY TAX IDENTIFIER',desc:'To identify a number assigned to a party by a tax authority.',repeat:1,length:'0..20',type:'an',level:4,children:[]},
			{id:20707,label:'1227',mandatory:'C',shortDesc:'CALCULATION SEQUENCE CODE',desc:'Code specifying a calculation sequence.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:20708,label:'5307',mandatory:'C',shortDesc:'TAX OR DUTY OR FEE PAYMENT DUE DATE CODE',desc:'A code indicating when the duty, tax, or fee payment will be due.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:2071,label:'MOA',mandatory:'C',shortDesc:'MONETARY AMOUNT',desc:'A segment specifying the tax amount for the allowance or charge.',repeat:1,length:'',type:'',level:3,children:[
			{id:20710,label:'C516',mandatory:'M',shortDesc:'MONETARY AMOUNT',desc:'Amount of goods or services stated as a monetary amount in a specified currency.',repeat:1,length:'',type:'',level:4,children:[
				{id:207100,label:'5025',mandatory:'M',shortDesc:'Monetary amount type code qualifier',desc:'Code qualifying the type of monetary amount.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:207101,label:'5004',mandatory:'C',shortDesc:'Monetary amount',desc:'To specify a monetary amount.',repeat:1,length:'0..35',type:'n',level:5,children:[]},
				{id:207102,label:'6345',mandatory:'C',shortDesc:'Currency identification code',desc:'Code specifying a monetary unit.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:207103,label:'6343',mandatory:'C',shortDesc:'Currency type code qualifier',desc:'Code qualifying the type of currency.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:207104,label:'4405',mandatory:'C',shortDesc:'Status description code',desc:'Code specifying a status.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]}]}]}]},
{id:21,label:'GRP25',mandatory:'C',shortDesc:'RCS#RFF#DTM#FTX#',desc:'A group of segments identifying any rules, laws or regulations with which the supplier must comply to meet requirements e.g. building regulations, safety requirements, etc.',repeat:999,length:'',type:'',level:1,children:[
	{id:210,label:'RCS',mandatory:'M',shortDesc:'REQUIREMENTS AND CONDITIONS',desc:'A segment to enable industry or national requirements to be specified.',repeat:1,length:'',type:'',level:2,children:[
		{id:2100,label:'7293',mandatory:'M',shortDesc:'SECTOR AREA IDENTIFICATION CODE QUALIFIER',desc:'Code qualifying identification of a subject area.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2101,label:'C550',mandatory:'C',shortDesc:'REQUIREMENT/CONDITION IDENTIFICATION',desc:'To identify the specific rule/condition requirement.',repeat:1,length:'',type:'',level:3,children:[
			{id:21010,label:'7295',mandatory:'M',shortDesc:'Requirement or condition description identifier',desc:'Code specifying a requirement or condition.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:21011,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:21012,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:21013,label:'7294',mandatory:'C',shortDesc:'Requirement or condition description',desc:'Free form description of a requirement or condition.',repeat:1,length:'0..35',type:'an',level:4,children:[]}]},
		{id:2102,label:'1229',mandatory:'C',shortDesc:'ACTION CODE',desc:'Code specifying the action to be taken or already taken.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2103,label:'3207',mandatory:'C',shortDesc:'COUNTRY IDENTIFIER',desc:'Identification of the name of the country or other geographical entity as defined in ISO 3166-1 and UN/ECE Recommendation 3.',repeat:1,length:'0..3',type:'an',level:3,children:[]}]},
	{id:211,label:'RFF',mandatory:'C',shortDesc:'REFERENCE',desc:'A segment identifying the referenced document by its number and, where appropriate, a line number.',repeat:5,length:'',type:'',level:2,children:[
		{id:2110,label:'C506',mandatory:'M',shortDesc:'REFERENCE',desc:'Identification of a reference.',repeat:1,length:'',type:'',level:3,children:[
			{id:21100,label:'1153',mandatory:'M',shortDesc:'Reference code qualifier',desc:'Code qualifying a reference.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:21101,label:'1154',mandatory:'C',shortDesc:'Reference identifier',desc:'Identifies a reference.',repeat:1,length:'0..70',type:'an',level:4,children:[]},
			{id:21102,label:'1156',mandatory:'C',shortDesc:'Document line identifier',desc:'To identify a line of a document.',repeat:1,length:'0..6',type:'an',level:4,children:[]},
			{id:21103,label:'1056',mandatory:'C',shortDesc:'Version identifier',desc:'To identify a version.',repeat:1,length:'0..9',type:'an',level:4,children:[]},
			{id:21104,label:'1060',mandatory:'C',shortDesc:'Revision identifier',desc:'To identify a revision.',repeat:1,length:'0..6',type:'an',level:4,children:[]}]}]},
	{id:212,label:'DTM',mandatory:'C',shortDesc:'DATE/TIME/PERIOD',desc:'A segment indicating the date/time details relating to the references.',repeat:5,length:'',type:'',level:2,children:[
		{id:2120,label:'C507',mandatory:'M',shortDesc:'DATE/TIME/PERIOD',desc:'Date and/or time, or period relevant to the specified date/time/period type.',repeat:1,length:'',type:'',level:3,children:[
			{id:21200,label:'2005',mandatory:'M',shortDesc:'Date or time or period function code qualifier',desc:'Code qualifying the function of a date, time or period.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:21201,label:'2380',mandatory:'C',shortDesc:'Date or time or period text',desc:'The value of a date, a date and time, a time or of a period in a specified representation.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:21202,label:'2379',mandatory:'C',shortDesc:'Date or time or period format code',desc:'Code specifying the representation of a date, time or period.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]}]},
	{id:213,label:'FTX',mandatory:'C',shortDesc:'FREE TEXT',desc:'A segment with free text information, in coded or clear form, used when additional information is needed but cannot be accommodated within other segments. In computer to computer exchanges such text will normally require the receiver to process this segment manually.',repeat:99999,length:'',type:'',level:2,children:[
		{id:2130,label:'4451',mandatory:'M',shortDesc:'TEXT SUBJECT CODE QUALIFIER',desc:'Code qualifying the subject of the text.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2131,label:'4453',mandatory:'C',shortDesc:'FREE TEXT FUNCTION CODE',desc:'Code specifying the function of free text.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2132,label:'C107',mandatory:'C',shortDesc:'TEXT REFERENCE',desc:'Coded reference to a standard text and its source.',repeat:1,length:'',type:'',level:3,children:[
			{id:21320,label:'4441',mandatory:'M',shortDesc:'Free text description code',desc:'Code specifying free form text.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:21321,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:21322,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:2133,label:'C108',mandatory:'C',shortDesc:'TEXT LITERAL',desc:'Free text; one to five lines.',repeat:1,length:'',type:'',level:3,children:[
			{id:21330,label:'4440',mandatory:'M',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:4,children:[]},
			{id:21331,label:'4440',mandatory:'C',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:4,children:[]},
			{id:21332,label:'4440',mandatory:'C',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:4,children:[]},
			{id:21333,label:'4440',mandatory:'C',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:4,children:[]},
			{id:21334,label:'4440',mandatory:'C',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:4,children:[]}]},
		{id:2134,label:'3453',mandatory:'C',shortDesc:'LANGUAGE NAME CODE',desc:'Code specifying the language name.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2135,label:'4447',mandatory:'C',shortDesc:'FREE TEXT FORMAT CODE',desc:'Code specifying the format of free text.',repeat:1,length:'0..3',type:'an',level:3,children:[]}]}]},
{id:22,label:'GRP26',mandatory:'C',shortDesc:'DGS#FTX#GRP27#',desc:'A segment group identifying dangerous goods and hazardous material information with associated points of contact and communications numbers.',repeat:999,length:'',type:'',level:1,children:[
	{id:220,label:'DGS',mandatory:'M',shortDesc:'DANGEROUS GOODS',desc:'A segment identifying dangerous goods and hazardous material information.',repeat:1,length:'',type:'',level:2,children:[
		{id:2200,label:'8273',mandatory:'C',shortDesc:'DANGEROUS GOODS REGULATIONS CODE',desc:'Code specifying a dangerous goods regulation.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2201,label:'C205',mandatory:'C',shortDesc:'HAZARD CODE',desc:'The identification of the dangerous goods in code.',repeat:1,length:'',type:'',level:3,children:[
			{id:22010,label:'8351',mandatory:'M',shortDesc:'Hazard identification code',desc:'Code identifying a hazard.',repeat:1,length:'0..7',type:'an',level:4,children:[]},
			{id:22011,label:'8078',mandatory:'C',shortDesc:'Additional hazard classification identifier',desc:'To identify an additional hazard classification.',repeat:1,length:'0..7',type:'an',level:4,children:[]},
			{id:22012,label:'8092',mandatory:'C',shortDesc:'Hazard code version identifier',desc:'To identify the version number of a hazard code.',repeat:1,length:'0..10',type:'an',level:4,children:[]}]},
		{id:2202,label:'C234',mandatory:'C',shortDesc:'UNDG INFORMATION',desc:'Information on dangerous goods, taken from the United Nations Dangerous Goods classification.',repeat:1,length:'',type:'',level:3,children:[
			{id:22020,label:'7124',mandatory:'C',shortDesc:'United Nations Dangerous Goods (UNDG) identifier',desc:'The unique serial number assigned within the United Nations to substances and articles contained in a list of the dangerous goods most commonly carried.',repeat:1,length:'4',type:'n',level:4,children:[]},
			{id:22021,label:'7088',mandatory:'C',shortDesc:'Dangerous goods flashpoint description',desc:'To describe the flahspoint of dangerous goods.',repeat:1,length:'0..8',type:'an',level:4,children:[]}]},
		{id:2203,label:'C223',mandatory:'C',shortDesc:'DANGEROUS GOODS SHIPMENT FLASHPOINT',desc:'Temperature at which a vapor can be ignited as per ISO 1523/73.',repeat:1,length:'',type:'',level:3,children:[
			{id:22030,label:'7106',mandatory:'C',shortDesc:'Shipment flashpoint degree',desc:'To specify the value of the flashpoint of a shipment.',repeat:1,length:'3',type:'n',level:4,children:[]},
			{id:22031,label:'6411',mandatory:'C',shortDesc:'Measurement unit code',desc:'Code specifying the unit of measurement.',repeat:1,length:'0..8',type:'an',level:4,children:[]}]},
		{id:2204,label:'8339',mandatory:'C',shortDesc:'PACKAGING DANGER LEVEL CODE',desc:'Code specifying the level of danger for which the packaging must cater.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2205,label:'8364',mandatory:'C',shortDesc:'EMERGENCY PROCEDURE FOR SHIPS IDENTIFIER',desc:'To identify the emergency procedure number for ships transporting dangerous goods. Synonym: EMS Number.',repeat:1,length:'0..6',type:'an',level:3,children:[]},
		{id:2206,label:'8410',mandatory:'C',shortDesc:'HAZARD MEDICAL FIRST AID GUIDE IDENTIFIER',desc:'To identify a Medical First Aid Guide (MFAG) for hazardous goods.',repeat:1,length:'0..4',type:'an',level:3,children:[]},
		{id:2207,label:'8126',mandatory:'C',shortDesc:'TRANSPORT EMERGENCY CARD IDENTIFIER',desc:'To identify a transport emergency (TREM) card.',repeat:1,length:'0..10',type:'an',level:3,children:[]},
		{id:2208,label:'C235',mandatory:'C',shortDesc:'HAZARD IDENTIFICATION PLACARD DETAILS',desc:'These numbers appear on the hazard identification placard required on the means of transport.',repeat:1,length:'',type:'',level:3,children:[
			{id:22080,label:'8158',mandatory:'C',shortDesc:'Orange hazard placard upper part identifier',desc:'To specify the identity number for the upper part of the orange hazard placard required on the means of transport.',repeat:1,length:'0..4',type:'an',level:4,children:[]},
			{id:22081,label:'8186',mandatory:'C',shortDesc:'Orange hazard placard lower part identifier',desc:'To specify the identity number for the lower part of the orange hazard placard required on the means of transport.',repeat:1,length:'4',type:'an',level:4,children:[]}]},
		{id:2209,label:'C236',mandatory:'C',shortDesc:'DANGEROUS GOODS LABEL',desc:'Markings identifying the type of hazardous goods and similar information.',repeat:1,length:'',type:'',level:3,children:[
			{id:22090,label:'8246',mandatory:'C',shortDesc:'Dangerous goods marking identifier',desc:'To identify the marking of dangerous goods.',repeat:1,length:'0..4',type:'an',level:4,children:[]},
			{id:22091,label:'8246',mandatory:'C',shortDesc:'Dangerous goods marking identifier',desc:'To identify the marking of dangerous goods.',repeat:1,length:'0..4',type:'an',level:4,children:[]},
			{id:22092,label:'8246',mandatory:'C',shortDesc:'Dangerous goods marking identifier',desc:'To identify the marking of dangerous goods.',repeat:1,length:'0..4',type:'an',level:4,children:[]},
			{id:22093,label:'8246',mandatory:'C',shortDesc:'Dangerous goods marking identifier',desc:'To identify the marking of dangerous goods.',repeat:1,length:'0..4',type:'an',level:4,children:[]}]},
		{id:2210,label:'8255',mandatory:'C',shortDesc:'PACKING INSTRUCTION TYPE CODE',desc:'Code specifying a type of packing instruction.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2211,label:'8179',mandatory:'C',shortDesc:'TRANSPORT MEANS DESCRIPTION CODE',desc:'Code specifying the means of transport.',repeat:1,length:'0..8',type:'an',level:3,children:[]},
		{id:2212,label:'8211',mandatory:'C',shortDesc:'HAZARDOUS CARGO TRANSPORT AUTHORISATION CODE',desc:'Code specifying the authorisation for the transportation of hazardous cargo.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2213,label:'C289',mandatory:'C',shortDesc:'TUNNEL RESTRICTION',desc:'To specify a restriction for transport through tunnels.',repeat:1,length:'',type:'',level:3,children:[
			{id:22130,label:'8461',mandatory:'C',shortDesc:'Tunnel Restriction Code',desc:'A code indicating a restriction for transport through tunnels.',repeat:1,length:'0..6',type:'an',level:4,children:[]},
			{id:22131,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:22132,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]}]},
	{id:221,label:'FTX',mandatory:'C',shortDesc:'FREE TEXT',desc:'A segment providing free form text information relating to the dangerous goods.',repeat:5,length:'',type:'',level:2,children:[
		{id:2210,label:'4451',mandatory:'M',shortDesc:'TEXT SUBJECT CODE QUALIFIER',desc:'Code qualifying the subject of the text.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2211,label:'4453',mandatory:'C',shortDesc:'FREE TEXT FUNCTION CODE',desc:'Code specifying the function of free text.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2212,label:'C107',mandatory:'C',shortDesc:'TEXT REFERENCE',desc:'Coded reference to a standard text and its source.',repeat:1,length:'',type:'',level:3,children:[
			{id:22120,label:'4441',mandatory:'M',shortDesc:'Free text description code',desc:'Code specifying free form text.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:22121,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:22122,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:2213,label:'C108',mandatory:'C',shortDesc:'TEXT LITERAL',desc:'Free text; one to five lines.',repeat:1,length:'',type:'',level:3,children:[
			{id:22130,label:'4440',mandatory:'M',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:4,children:[]},
			{id:22131,label:'4440',mandatory:'C',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:4,children:[]},
			{id:22132,label:'4440',mandatory:'C',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:4,children:[]},
			{id:22133,label:'4440',mandatory:'C',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:4,children:[]},
			{id:22134,label:'4440',mandatory:'C',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:4,children:[]}]},
		{id:2214,label:'3453',mandatory:'C',shortDesc:'LANGUAGE NAME CODE',desc:'Code specifying the language name.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2215,label:'4447',mandatory:'C',shortDesc:'FREE TEXT FORMAT CODE',desc:'Code specifying the format of free text.',repeat:1,length:'0..3',type:'an',level:3,children:[]}]},
	{id:222,label:'GRP27',mandatory:'C',shortDesc:'CTA#COM#',desc:'A segment group providing contacts and communications numbers associated with the dangerous goods information.',repeat:99,length:'',type:'',level:2,children:[
		{id:2220,label:'CTA',mandatory:'M',shortDesc:'CONTACT INFORMATION',desc:'A segment identifying to whom communications should be directed concerning dangerous goods.',repeat:1,length:'',type:'',level:3,children:[
			{id:22200,label:'3139',mandatory:'C',shortDesc:'CONTACT FUNCTION CODE',desc:'Code specifying the function of a contact (e.g. department or person).',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:22201,label:'C056',mandatory:'C',shortDesc:'CONTACT DETAILS',desc:'Code and/or name of a contact such as a department or employee. Code preferred.',repeat:1,length:'',type:'',level:4,children:[
				{id:222010,label:'3413',mandatory:'C',shortDesc:'Contact identifier',desc:'To identify a contact, such as a department or employee.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:222011,label:'3412',mandatory:'C',shortDesc:'Contact name',desc:'Name of a contact, such as a department or employee.',repeat:1,length:'0..256',type:'an',level:5,children:[]}]}]},
		{id:2221,label:'COM',mandatory:'C',shortDesc:'COMMUNICATION CONTACT',desc:'A segment identifying communication numbers of the contacts to whom communications should be directed.',repeat:5,length:'',type:'',level:3,children:[
			{id:22210,label:'C076',mandatory:'M',shortDesc:'COMMUNICATION CONTACT',desc:'Communication number of a department or employee in a specified channel.',repeat:1,length:'',type:'',level:4,children:[
				{id:222100,label:'3148',mandatory:'M',shortDesc:'Communication address identifier',desc:'To identify a communication address.',repeat:1,length:'0..512',type:'an',level:5,children:[]},
				{id:222101,label:'3155',mandatory:'M',shortDesc:'Communication means type code',desc:'Code specifying the type of communication address.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]}]}]}]},
{id:23,label:'GRP28',mandatory:'C',shortDesc:'EFI#CED#COM#RFF#DTM#QTY#',desc:'A group of segments that refers through an external file identification to each of the external files and giving additional information about each of the files.',repeat:99,length:'',type:'',level:1,children:[
	{id:230,label:'EFI',mandatory:'M',shortDesc:'EXTERNAL FILE LINK IDENTIFICATION',desc:'This segment will identify the external files by indicating the file name, file number and its sequence number in an exchange.',repeat:1,length:'',type:'',level:2,children:[
		{id:2300,label:'C077',mandatory:'M',shortDesc:'FILE IDENTIFICATION',desc:'To identify a file.',repeat:1,length:'',type:'',level:3,children:[
			{id:23000,label:'1508',mandatory:'C',shortDesc:'File name',desc:'Name of a file.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:23001,label:'7008',mandatory:'C',shortDesc:'Item description',desc:'Free form description of an item.',repeat:1,length:'0..256',type:'an',level:4,children:[]}]},
		{id:2301,label:'C099',mandatory:'C',shortDesc:'FILE DETAILS',desc:'To define details relevant to a file.',repeat:1,length:'',type:'',level:3,children:[
			{id:23010,label:'1516',mandatory:'M',shortDesc:'File format name',desc:'Name of a file format.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:23011,label:'1056',mandatory:'C',shortDesc:'Version identifier',desc:'To identify a version.',repeat:1,length:'0..9',type:'an',level:4,children:[]},
			{id:23012,label:'1503',mandatory:'C',shortDesc:'Data format description code',desc:'Code specifying the data format.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:23013,label:'1502',mandatory:'C',shortDesc:'Data format description',desc:'Free form description of the data format.',repeat:1,length:'0..35',type:'an',level:4,children:[]}]},
		{id:2302,label:'1050',mandatory:'C',shortDesc:'SEQUENCE POSITION IDENTIFIER',desc:'To identify a position in a sequence.',repeat:1,length:'0..10',type:'an',level:3,children:[]},
		{id:2303,label:'9450',mandatory:'C',shortDesc:'FILE COMPRESSION TECHNIQUE NAME',desc:'Name of a file compression technique.',repeat:1,length:'0..35',type:'an',level:3,children:[]}]},
	{id:231,label:'CED',mandatory:'C',shortDesc:'COMPUTER ENVIRONMENT DETAILS',desc:'To give precise definitions of all necessary elements belonging to the configuration of a computer system, e.g. hardware, firmware, operating system, communication and application software',repeat:99,length:'',type:'',level:2,children:[
		{id:2310,label:'1501',mandatory:'M',shortDesc:'COMPUTER ENVIRONMENT DETAILS CODE QUALIFIER',desc:'Code qualifying computer environment details.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2311,label:'C079',mandatory:'M',shortDesc:'COMPUTER ENVIRONMENT IDENTIFICATION',desc:'To identify parts of a computer environment.',repeat:1,length:'',type:'',level:3,children:[
			{id:23110,label:'1511',mandatory:'C',shortDesc:'Computer environment name code',desc:'Code specifying a computer environment.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:23111,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:23112,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:23113,label:'1510',mandatory:'C',shortDesc:'Computer environment name',desc:'Name of a computer environment.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:23114,label:'1056',mandatory:'C',shortDesc:'Version identifier',desc:'To identify a version.',repeat:1,length:'0..9',type:'an',level:4,children:[]},
			{id:23115,label:'1058',mandatory:'C',shortDesc:'Release identifier',desc:'To identify a release.',repeat:1,length:'0..9',type:'an',level:4,children:[]},
			{id:23116,label:'7402',mandatory:'C',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:4,children:[]}]},
		{id:2312,label:'9448',mandatory:'C',shortDesc:'FILE GENERATION COMMAND NAME',desc:'Name of a file generation command.',repeat:1,length:'0..35',type:'an',level:3,children:[]}]},
	{id:232,label:'COM',mandatory:'C',shortDesc:'COMMUNICATION CONTACT',desc:'To identify a communication number of a department or a person to whom communication should be directed.',repeat:9,length:'',type:'',level:2,children:[
		{id:2320,label:'C076',mandatory:'M',shortDesc:'COMMUNICATION CONTACT',desc:'Communication number of a department or employee in a specified channel.',repeat:1,length:'',type:'',level:3,children:[
			{id:23200,label:'3148',mandatory:'M',shortDesc:'Communication address identifier',desc:'To identify a communication address.',repeat:1,length:'0..512',type:'an',level:4,children:[]},
			{id:23201,label:'3155',mandatory:'M',shortDesc:'Communication means type code',desc:'Code specifying the type of communication address.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]}]},
	{id:233,label:'RFF',mandatory:'C',shortDesc:'REFERENCE',desc:'A segment giving reference related to the file identified by a previous external file link identification segment.',repeat:9,length:'',type:'',level:2,children:[
		{id:2330,label:'C506',mandatory:'M',shortDesc:'REFERENCE',desc:'Identification of a reference.',repeat:1,length:'',type:'',level:3,children:[
			{id:23300,label:'1153',mandatory:'M',shortDesc:'Reference code qualifier',desc:'Code qualifying a reference.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:23301,label:'1154',mandatory:'C',shortDesc:'Reference identifier',desc:'Identifies a reference.',repeat:1,length:'0..70',type:'an',level:4,children:[]},
			{id:23302,label:'1156',mandatory:'C',shortDesc:'Document line identifier',desc:'To identify a line of a document.',repeat:1,length:'0..6',type:'an',level:4,children:[]},
			{id:23303,label:'1056',mandatory:'C',shortDesc:'Version identifier',desc:'To identify a version.',repeat:1,length:'0..9',type:'an',level:4,children:[]},
			{id:23304,label:'1060',mandatory:'C',shortDesc:'Revision identifier',desc:'To identify a revision.',repeat:1,length:'0..6',type:'an',level:4,children:[]}]}]},
	{id:234,label:'DTM',mandatory:'C',shortDesc:'DATE/TIME/PERIOD',desc:'This segment will convey the date/time details of the external file.',repeat:9,length:'',type:'',level:2,children:[
		{id:2340,label:'C507',mandatory:'M',shortDesc:'DATE/TIME/PERIOD',desc:'Date and/or time, or period relevant to the specified date/time/period type.',repeat:1,length:'',type:'',level:3,children:[
			{id:23400,label:'2005',mandatory:'M',shortDesc:'Date or time or period function code qualifier',desc:'Code qualifying the function of a date, time or period.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:23401,label:'2380',mandatory:'C',shortDesc:'Date or time or period text',desc:'The value of a date, a date and time, a time or of a period in a specified representation.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:23402,label:'2379',mandatory:'C',shortDesc:'Date or time or period format code',desc:'Code specifying the representation of a date, time or period.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]}]},
	{id:235,label:'QTY',mandatory:'C',shortDesc:'QUANTITY',desc:'The size/volume of the external file identified in the previous external file link identification segment',repeat:9,length:'',type:'',level:2,children:[
		{id:2350,label:'C186',mandatory:'M',shortDesc:'QUANTITY DETAILS',desc:'Quantity information in a transaction, qualified when relevant.',repeat:1,length:'',type:'',level:3,children:[
			{id:23500,label:'6063',mandatory:'M',shortDesc:'Quantity type code qualifier',desc:'Code qualifying the type of quantity.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:23501,label:'6060',mandatory:'M',shortDesc:'Quantity',desc:'Alphanumeric representation of a quantity.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:23502,label:'6411',mandatory:'C',shortDesc:'Measurement unit code',desc:'Code specifying the unit of measurement.',repeat:1,length:'0..8',type:'an',level:4,children:[]}]}]}]},
{id:24,label:'GRP29',mandatory:'C',shortDesc:'LIN#PIA#IMD#MEA#QTY#PCD#ALI#DTM#MOA#GEI#GIN#GIR#QVR#DOC#PAI#MTD#FTX#GRP30#GRP31#GRP33#GRP34#GRP35#GRP38#GRP40#GRP41#GRP45#GRP51#GRP53#GRP54#GRP55#GRP57#GRP58#GRP60#GRP62#',desc:'A group of segments providing details of the individual ordered items. This segment group may be repeated to give sub-line details.',repeat:200000,length:'',type:'',level:1,children:[
	{id:240,label:'LIN',mandatory:'M',shortDesc:'LINE ITEM',desc:'A segment identifying the line item by the line number and configuration level, and additionally, identifying the product or service ordered. Other product identification numbers e.g. Buyer product number, etc. can be specified within the following PIA segment.',repeat:1,length:'',type:'',level:2,children:[
		{id:2400,label:'1082',mandatory:'C',shortDesc:'LINE ITEM IDENTIFIER',desc:'To identify a line item.',repeat:1,length:'0..6',type:'an',level:3,children:[]},
		{id:2401,label:'1229',mandatory:'C',shortDesc:'ACTION CODE',desc:'Code specifying the action to be taken or already taken.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2402,label:'C212',mandatory:'C',shortDesc:'ITEM NUMBER IDENTIFICATION',desc:'Goods identification for a specified source.',repeat:1,length:'',type:'',level:3,children:[
			{id:24020,label:'7140',mandatory:'C',shortDesc:'Item identifier',desc:'To identify an item.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:24021,label:'7143',mandatory:'C',shortDesc:'Item type identification code',desc:'Coded identification of an item type.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:24022,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:24023,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:2403,label:'C829',mandatory:'C',shortDesc:'SUB-LINE INFORMATION',desc:'To provide an indication that a segment or segment group is used to contain sub-line or sub-line item information and to optionally enable the sub-line to be identified.',repeat:1,length:'',type:'',level:3,children:[
			{id:24030,label:'5495',mandatory:'C',shortDesc:'Sub-line indicator code',desc:'Code indicating a sub-line item.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:24031,label:'1082',mandatory:'C',shortDesc:'Line item identifier',desc:'To identify a line item.',repeat:1,length:'0..6',type:'an',level:4,children:[]}]},
		{id:2404,label:'1222',mandatory:'C',shortDesc:'CONFIGURATION LEVEL NUMBER',desc:'To specify a level within a configuration.',repeat:1,length:'0..2',type:'n',level:3,children:[]},
		{id:2405,label:'7083',mandatory:'C',shortDesc:'CONFIGURATION OPERATION CODE',desc:'Code specifying the configuration operation.',repeat:1,length:'0..3',type:'an',level:3,children:[]}]},
	{id:241,label:'PIA',mandatory:'C',shortDesc:'ADDITIONAL PRODUCT ID',desc:'A segment providing either additional identification to the product specified in the LIN segment (e.g. Harmonized System number), or provides any substitute product identification.',repeat:25,length:'',type:'',level:2,children:[
		{id:2410,label:'4347',mandatory:'M',shortDesc:'PRODUCT IDENTIFIER CODE QUALIFIER',desc:'Code qualifying the product identifier.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2411,label:'C212',mandatory:'M',shortDesc:'ITEM NUMBER IDENTIFICATION',desc:'Goods identification for a specified source.',repeat:1,length:'',type:'',level:3,children:[
			{id:24110,label:'7140',mandatory:'C',shortDesc:'Item identifier',desc:'To identify an item.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:24111,label:'7143',mandatory:'C',shortDesc:'Item type identification code',desc:'Coded identification of an item type.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:24112,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:24113,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:2412,label:'C212',mandatory:'C',shortDesc:'ITEM NUMBER IDENTIFICATION',desc:'Goods identification for a specified source.',repeat:1,length:'',type:'',level:3,children:[
			{id:24120,label:'7140',mandatory:'C',shortDesc:'Item identifier',desc:'To identify an item.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:24121,label:'7143',mandatory:'C',shortDesc:'Item type identification code',desc:'Coded identification of an item type.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:24122,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:24123,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:2413,label:'C212',mandatory:'C',shortDesc:'ITEM NUMBER IDENTIFICATION',desc:'Goods identification for a specified source.',repeat:1,length:'',type:'',level:3,children:[
			{id:24130,label:'7140',mandatory:'C',shortDesc:'Item identifier',desc:'To identify an item.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:24131,label:'7143',mandatory:'C',shortDesc:'Item type identification code',desc:'Coded identification of an item type.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:24132,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:24133,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:2414,label:'C212',mandatory:'C',shortDesc:'ITEM NUMBER IDENTIFICATION',desc:'Goods identification for a specified source.',repeat:1,length:'',type:'',level:3,children:[
			{id:24140,label:'7140',mandatory:'C',shortDesc:'Item identifier',desc:'To identify an item.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:24141,label:'7143',mandatory:'C',shortDesc:'Item type identification code',desc:'Coded identification of an item type.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:24142,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:24143,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:2415,label:'C212',mandatory:'C',shortDesc:'ITEM NUMBER IDENTIFICATION',desc:'Goods identification for a specified source.',repeat:1,length:'',type:'',level:3,children:[
			{id:24150,label:'7140',mandatory:'C',shortDesc:'Item identifier',desc:'To identify an item.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:24151,label:'7143',mandatory:'C',shortDesc:'Item type identification code',desc:'Coded identification of an item type.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:24152,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:24153,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]}]},
	{id:242,label:'IMD',mandatory:'C',shortDesc:'ITEM DESCRIPTION',desc:'A segment for describing the product or service being ordered as well as product characteristic. This segment should be used for products or services that cannot be fully identified by a product code or article number.',repeat:99,length:'',type:'',level:2,children:[
		{id:2420,label:'7077',mandatory:'C',shortDesc:'DESCRIPTION FORMAT CODE',desc:'Code specifying the format of a description.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2421,label:'C272',mandatory:'C',shortDesc:'ITEM CHARACTERISTIC',desc:'To provide the characteristic of the item being described.',repeat:1,length:'',type:'',level:3,children:[
			{id:24210,label:'7081',mandatory:'C',shortDesc:'Item characteristic code',desc:'Code specifying the characteristic of an item.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:24211,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:24212,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:2422,label:'C273',mandatory:'C',shortDesc:'ITEM DESCRIPTION',desc:'Description of an item.',repeat:1,length:'',type:'',level:3,children:[
			{id:24220,label:'7009',mandatory:'C',shortDesc:'Item description code',desc:'Code specifying an item.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:24221,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:24222,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:24223,label:'7008',mandatory:'C',shortDesc:'Item description',desc:'Free form description of an item.',repeat:1,length:'0..256',type:'an',level:4,children:[]},
			{id:24224,label:'7008',mandatory:'C',shortDesc:'Item description',desc:'Free form description of an item.',repeat:1,length:'0..256',type:'an',level:4,children:[]},
			{id:24225,label:'3453',mandatory:'C',shortDesc:'Language name code',desc:'Code specifying the language name.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:2423,label:'7383',mandatory:'C',shortDesc:'SURFACE OR LAYER CODE',desc:'Code specifying the surface or layer of an object.',repeat:1,length:'0..3',type:'an',level:3,children:[]}]},
	{id:243,label:'MEA',mandatory:'C',shortDesc:'MEASUREMENTS',desc:'A segment enabling the physical measurements of the ordered item to be specified where this is required for full identification of the product. Any measurements must refer to the product in its unpacked form e.g. thickness of plastic film, length, weight, etc.',repeat:99,length:'',type:'',level:2,children:[
		{id:2430,label:'6311',mandatory:'M',shortDesc:'MEASUREMENT PURPOSE CODE QUALIFIER',desc:'Code qualifying the purpose of the measurement.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2431,label:'C502',mandatory:'C',shortDesc:'MEASUREMENT DETAILS',desc:'Identification of measurement type.',repeat:1,length:'',type:'',level:3,children:[
			{id:24310,label:'6313',mandatory:'C',shortDesc:'Measured attribute code',desc:'Code specifying the attribute measured.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:24311,label:'6321',mandatory:'C',shortDesc:'Measurement significance code',desc:'Code specifying the significance of a measurement.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:24312,label:'6155',mandatory:'C',shortDesc:'Non-discrete measurement name code',desc:'Code specifying the name of a non-discrete measurement.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:24313,label:'6154',mandatory:'C',shortDesc:'Non-discrete measurement name',desc:'Name of a non-discrete measurement.',repeat:1,length:'0..70',type:'an',level:4,children:[]}]},
		{id:2432,label:'C174',mandatory:'C',shortDesc:'VALUE/RANGE',desc:'Measurement value and relevant minimum and maximum values of the measurement range.',repeat:1,length:'',type:'',level:3,children:[
			{id:24320,label:'6411',mandatory:'M',shortDesc:'Measurement unit code',desc:'Code specifying the unit of measurement.',repeat:1,length:'0..8',type:'an',level:4,children:[]},
			{id:24321,label:'6314',mandatory:'C',shortDesc:'Measure',desc:'To specify the value of a measurement.',repeat:1,length:'0..18',type:'an',level:4,children:[]},
			{id:24322,label:'6162',mandatory:'C',shortDesc:'Range minimum quantity',desc:'To specify the minimum value of a range.',repeat:1,length:'0..18',type:'n',level:4,children:[]},
			{id:24323,label:'6152',mandatory:'C',shortDesc:'Range maximum quantity',desc:'To specify the maximum value of a range.',repeat:1,length:'0..18',type:'n',level:4,children:[]},
			{id:24324,label:'6432',mandatory:'C',shortDesc:'Significant digits quantity',desc:'Count of the number of significant digits.',repeat:1,length:'0..2',type:'n',level:4,children:[]}]},
		{id:2433,label:'7383',mandatory:'C',shortDesc:'SURFACE OR LAYER CODE',desc:'Code specifying the surface or layer of an object.',repeat:1,length:'0..3',type:'an',level:3,children:[]}]},
	{id:244,label:'QTY',mandatory:'C',shortDesc:'QUANTITY',desc:'A segment identifying the product quantities e.g. ordered quantity.',repeat:99,length:'',type:'',level:2,children:[
		{id:2440,label:'C186',mandatory:'M',shortDesc:'QUANTITY DETAILS',desc:'Quantity information in a transaction, qualified when relevant.',repeat:1,length:'',type:'',level:3,children:[
			{id:24400,label:'6063',mandatory:'M',shortDesc:'Quantity type code qualifier',desc:'Code qualifying the type of quantity.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:24401,label:'6060',mandatory:'M',shortDesc:'Quantity',desc:'Alphanumeric representation of a quantity.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:24402,label:'6411',mandatory:'C',shortDesc:'Measurement unit code',desc:'Code specifying the unit of measurement.',repeat:1,length:'0..8',type:'an',level:4,children:[]}]}]},
	{id:245,label:'PCD',mandatory:'C',shortDesc:'PERCENTAGE DETAILS',desc:'A segment specifying the strength or yield of a product as a percentage e.g. 80% to indicate the strength of an acid.',repeat:5,length:'',type:'',level:2,children:[
		{id:2450,label:'C501',mandatory:'M',shortDesc:'PERCENTAGE DETAILS',desc:'Percentage relating to a specified basis.',repeat:1,length:'',type:'',level:3,children:[
			{id:24500,label:'5245',mandatory:'M',shortDesc:'Percentage type code qualifier',desc:'Code qualifying the type of percentage.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:24501,label:'5482',mandatory:'C',shortDesc:'Percentage',desc:'To specify a percentage.',repeat:1,length:'0..10',type:'n',level:4,children:[]},
			{id:24502,label:'5249',mandatory:'C',shortDesc:'Percentage basis identification code',desc:'Code specifying the basis on which a percentage is calculated.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:24503,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:24504,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:2451,label:'4405',mandatory:'C',shortDesc:'STATUS DESCRIPTION CODE',desc:'Code specifying a status.',repeat:1,length:'0..3',type:'an',level:3,children:[]}]},
	{id:246,label:'ALI',mandatory:'C',shortDesc:'ADDITIONAL INFORMATION',desc:'A segment indicating that the line item is subject to special conditions owing to origin, customs preference, embargo regulations or commercial factors.',repeat:5,length:'',type:'',level:2,children:[
		{id:2460,label:'3239',mandatory:'C',shortDesc:'COUNTRY OF ORIGIN IDENTIFIER',desc:'To identify the country in which the goods have been produced or manufactured, according to criteria laid down for the application of the Customs tariff or quantitative restrictions, or any measure related to trade.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2461,label:'9213',mandatory:'C',shortDesc:'DUTY REGIME TYPE CODE',desc:'Code specifying a type of duty regime.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2462,label:'4183',mandatory:'C',shortDesc:'SPECIAL CONDITION CODE',desc:'Code specifying a special condition.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2463,label:'4183',mandatory:'C',shortDesc:'SPECIAL CONDITION CODE',desc:'Code specifying a special condition.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2464,label:'4183',mandatory:'C',shortDesc:'SPECIAL CONDITION CODE',desc:'Code specifying a special condition.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2465,label:'4183',mandatory:'C',shortDesc:'SPECIAL CONDITION CODE',desc:'Code specifying a special condition.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2466,label:'4183',mandatory:'C',shortDesc:'SPECIAL CONDITION CODE',desc:'Code specifying a special condition.',repeat:1,length:'0..3',type:'an',level:3,children:[]}]},
	{id:247,label:'DTM',mandatory:'C',shortDesc:'DATE/TIME/PERIOD',desc:'A segment specifying date/time/period details relating to the line item only.',repeat:35,length:'',type:'',level:2,children:[
		{id:2470,label:'C507',mandatory:'M',shortDesc:'DATE/TIME/PERIOD',desc:'Date and/or time, or period relevant to the specified date/time/period type.',repeat:1,length:'',type:'',level:3,children:[
			{id:24700,label:'2005',mandatory:'M',shortDesc:'Date or time or period function code qualifier',desc:'Code qualifying the function of a date, time or period.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:24701,label:'2380',mandatory:'C',shortDesc:'Date or time or period text',desc:'The value of a date, a date and time, a time or of a period in a specified representation.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:24702,label:'2379',mandatory:'C',shortDesc:'Date or time or period format code',desc:'Code specifying the representation of a date, time or period.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]}]},
	{id:248,label:'MOA',mandatory:'C',shortDesc:'MONETARY AMOUNT',desc:'A segment specifying any monetary amounts relating to the product e.g. item amount, insurance value, customs value.',repeat:10,length:'',type:'',level:2,children:[
		{id:2480,label:'C516',mandatory:'M',shortDesc:'MONETARY AMOUNT',desc:'Amount of goods or services stated as a monetary amount in a specified currency.',repeat:1,length:'',type:'',level:3,children:[
			{id:24800,label:'5025',mandatory:'M',shortDesc:'Monetary amount type code qualifier',desc:'Code qualifying the type of monetary amount.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:24801,label:'5004',mandatory:'C',shortDesc:'Monetary amount',desc:'To specify a monetary amount.',repeat:1,length:'0..35',type:'n',level:4,children:[]},
			{id:24802,label:'6345',mandatory:'C',shortDesc:'Currency identification code',desc:'Code specifying a monetary unit.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:24803,label:'6343',mandatory:'C',shortDesc:'Currency type code qualifier',desc:'Code qualifying the type of currency.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:24804,label:'4405',mandatory:'C',shortDesc:'Status description code',desc:'Code specifying a status.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]}]},
	{id:249,label:'GEI',mandatory:'C',shortDesc:'PROCESSING INFORMATION',desc:'A segment used to specify general processing information about the line item.',repeat:99,length:'',type:'',level:2,children:[
		{id:2490,label:'9649',mandatory:'M',shortDesc:'PROCESSING INFORMATION CODE QUALIFIER',desc:'Code qualifying the processing information.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2491,label:'C012',mandatory:'C',shortDesc:'PROCESSING INDICATOR',desc:'Identification of the processing indicator.',repeat:1,length:'',type:'',level:3,children:[
			{id:24910,label:'7365',mandatory:'C',shortDesc:'Processing indicator description code',desc:'Code specifying a processing indicator.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:24911,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:24912,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:24913,label:'7364',mandatory:'C',shortDesc:'Processing indicator description',desc:'Free form description of a processing indicator.',repeat:1,length:'0..35',type:'an',level:4,children:[]}]},
		{id:2492,label:'7187',mandatory:'C',shortDesc:'PROCESS TYPE DESCRIPTION CODE',desc:'Code specifying a type of process.',repeat:1,length:'0..17',type:'an',level:3,children:[]}]},
	{id:250,label:'GIN',mandatory:'C',shortDesc:'GOODS IDENTITY NUMBER',desc:'A segment providing identity numbers to be applied to the goods being ordered e.g. serial numbers for assembled equipment.',repeat:1000,length:'',type:'',level:2,children:[
		{id:2500,label:'7405',mandatory:'M',shortDesc:'OBJECT IDENTIFICATION CODE QUALIFIER',desc:'Code qualifying the identification of an object.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2501,label:'C208',mandatory:'M',shortDesc:'IDENTITY NUMBER RANGE',desc:'Goods item identification numbers, start and end of consecutively numbered range.',repeat:1,length:'',type:'',level:3,children:[
			{id:25010,label:'7402',mandatory:'M',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:25011,label:'7402',mandatory:'C',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:4,children:[]}]},
		{id:2502,label:'C208',mandatory:'C',shortDesc:'IDENTITY NUMBER RANGE',desc:'Goods item identification numbers, start and end of consecutively numbered range.',repeat:1,length:'',type:'',level:3,children:[
			{id:25020,label:'7402',mandatory:'M',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:25021,label:'7402',mandatory:'C',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:4,children:[]}]},
		{id:2503,label:'C208',mandatory:'C',shortDesc:'IDENTITY NUMBER RANGE',desc:'Goods item identification numbers, start and end of consecutively numbered range.',repeat:1,length:'',type:'',level:3,children:[
			{id:25030,label:'7402',mandatory:'M',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:25031,label:'7402',mandatory:'C',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:4,children:[]}]},
		{id:2504,label:'C208',mandatory:'C',shortDesc:'IDENTITY NUMBER RANGE',desc:'Goods item identification numbers, start and end of consecutively numbered range.',repeat:1,length:'',type:'',level:3,children:[
			{id:25040,label:'7402',mandatory:'M',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:25041,label:'7402',mandatory:'C',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:4,children:[]}]},
		{id:2505,label:'C208',mandatory:'C',shortDesc:'IDENTITY NUMBER RANGE',desc:'Goods item identification numbers, start and end of consecutively numbered range.',repeat:1,length:'',type:'',level:3,children:[
			{id:25050,label:'7402',mandatory:'M',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:25051,label:'7402',mandatory:'C',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:4,children:[]}]}]},
	{id:251,label:'GIR',mandatory:'C',shortDesc:'RELATED IDENTIFICATION NUMBERS',desc:'A segment providing sets of related identification numbers for a line item e.g. engine numbers, chassis number and transmission number for a vehicle.',repeat:1000,length:'',type:'',level:2,children:[
		{id:2510,label:'7297',mandatory:'M',shortDesc:'SET TYPE CODE QUALIFIER',desc:'Code qualifying the type of set.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2511,label:'C206',mandatory:'M',shortDesc:'IDENTIFICATION NUMBER',desc:'The identification of an object.',repeat:1,length:'',type:'',level:3,children:[
			{id:25110,label:'7402',mandatory:'M',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:25111,label:'7405',mandatory:'C',shortDesc:'Object identification code qualifier',desc:'Code qualifying the identification of an object.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:25112,label:'4405',mandatory:'C',shortDesc:'Status description code',desc:'Code specifying a status.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:2512,label:'C206',mandatory:'C',shortDesc:'IDENTIFICATION NUMBER',desc:'The identification of an object.',repeat:1,length:'',type:'',level:3,children:[
			{id:25120,label:'7402',mandatory:'M',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:25121,label:'7405',mandatory:'C',shortDesc:'Object identification code qualifier',desc:'Code qualifying the identification of an object.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:25122,label:'4405',mandatory:'C',shortDesc:'Status description code',desc:'Code specifying a status.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:2513,label:'C206',mandatory:'C',shortDesc:'IDENTIFICATION NUMBER',desc:'The identification of an object.',repeat:1,length:'',type:'',level:3,children:[
			{id:25130,label:'7402',mandatory:'M',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:25131,label:'7405',mandatory:'C',shortDesc:'Object identification code qualifier',desc:'Code qualifying the identification of an object.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:25132,label:'4405',mandatory:'C',shortDesc:'Status description code',desc:'Code specifying a status.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:2514,label:'C206',mandatory:'C',shortDesc:'IDENTIFICATION NUMBER',desc:'The identification of an object.',repeat:1,length:'',type:'',level:3,children:[
			{id:25140,label:'7402',mandatory:'M',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:25141,label:'7405',mandatory:'C',shortDesc:'Object identification code qualifier',desc:'Code qualifying the identification of an object.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:25142,label:'4405',mandatory:'C',shortDesc:'Status description code',desc:'Code specifying a status.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:2515,label:'C206',mandatory:'C',shortDesc:'IDENTIFICATION NUMBER',desc:'The identification of an object.',repeat:1,length:'',type:'',level:3,children:[
			{id:25150,label:'7402',mandatory:'M',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:25151,label:'7405',mandatory:'C',shortDesc:'Object identification code qualifier',desc:'Code qualifying the identification of an object.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:25152,label:'4405',mandatory:'C',shortDesc:'Status description code',desc:'Code specifying a status.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]}]},
	{id:252,label:'QVR',mandatory:'C',shortDesc:'QUANTITY VARIANCES',desc:'A segment identifying order quantity variances, normally specified by the supplier using an Order Response message.',repeat:1,length:'',type:'',level:2,children:[
		{id:2520,label:'C279',mandatory:'C',shortDesc:'QUANTITY DIFFERENCE INFORMATION',desc:'Information on quantity difference.',repeat:1,length:'',type:'',level:3,children:[
			{id:25200,label:'6064',mandatory:'M',shortDesc:'Variance quantity',desc:'To specify the value of a quantity variance.',repeat:1,length:'0..15',type:'n',level:4,children:[]},
			{id:25201,label:'6063',mandatory:'C',shortDesc:'Quantity type code qualifier',desc:'Code qualifying the type of quantity.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:2521,label:'4221',mandatory:'C',shortDesc:'DISCREPANCY NATURE IDENTIFICATION CODE',desc:'Code specifying the identification used to define the nature of a discrepancy.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2522,label:'C960',mandatory:'C',shortDesc:'REASON FOR CHANGE',desc:'Code and/or description of the reason for a change.',repeat:1,length:'',type:'',level:3,children:[
			{id:25220,label:'4295',mandatory:'C',shortDesc:'Change reason description code',desc:'Code specifying the reason for a change.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:25221,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:25222,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:25223,label:'4294',mandatory:'C',shortDesc:'Change reason description',desc:'Free form description of the reason for change.',repeat:1,length:'0..35',type:'an',level:4,children:[]}]}]},
	{id:253,label:'DOC',mandatory:'C',shortDesc:'DOCUMENT/MESSAGE DETAILS',desc:'A segment to indicate that a certificate/declaration of origin is required for the ordered article.',repeat:99,length:'',type:'',level:2,children:[
		{id:2530,label:'C002',mandatory:'M',shortDesc:'DOCUMENT/MESSAGE NAME',desc:'Identification of a type of document/message by code or name. Code preferred.',repeat:1,length:'',type:'',level:3,children:[
			{id:25300,label:'1001',mandatory:'C',shortDesc:'Document name code',desc:'Code specifying the document name.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:25301,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:25302,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:25303,label:'1000',mandatory:'C',shortDesc:'Document name',desc:'Name of a document.',repeat:1,length:'0..35',type:'an',level:4,children:[]}]},
		{id:2531,label:'C503',mandatory:'C',shortDesc:'DOCUMENT/MESSAGE DETAILS',desc:'Identification of document/message by number, status, source and/or language.',repeat:1,length:'',type:'',level:3,children:[
			{id:25310,label:'1004',mandatory:'C',shortDesc:'Document identifier',desc:'To identify a document.',repeat:1,length:'0..70',type:'an',level:4,children:[]},
			{id:25311,label:'1373',mandatory:'C',shortDesc:'Document status code',desc:'Code specifying the status of a document.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:25312,label:'1366',mandatory:'C',shortDesc:'Document source description',desc:'Free form description of the source of a document.',repeat:1,length:'0..70',type:'an',level:4,children:[]},
			{id:25313,label:'3453',mandatory:'C',shortDesc:'Language name code',desc:'Code specifying the language name.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:25314,label:'1056',mandatory:'C',shortDesc:'Version identifier',desc:'To identify a version.',repeat:1,length:'0..9',type:'an',level:4,children:[]},
			{id:25315,label:'1060',mandatory:'C',shortDesc:'Revision identifier',desc:'To identify a revision.',repeat:1,length:'0..6',type:'an',level:4,children:[]}]},
		{id:2532,label:'3153',mandatory:'C',shortDesc:'COMMUNICATION MEDIUM TYPE CODE',desc:'Code specifying the type of communication medium.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2533,label:'1220',mandatory:'C',shortDesc:'DOCUMENT COPIES REQUIRED QUANTITY',desc:'Quantity of document copies required.',repeat:1,length:'0..2',type:'n',level:3,children:[]},
		{id:2534,label:'1218',mandatory:'C',shortDesc:'DOCUMENT ORIGINALS REQUIRED QUANTITY',desc:'Quantity of document originals required.',repeat:1,length:'0..2',type:'n',level:3,children:[]}]},
	{id:254,label:'PAI',mandatory:'C',shortDesc:'PAYMENT INSTRUCTIONS',desc:'A segment to indicate that where a central buyer is purchasing on behalf of different consignees, the means of payment may differ for each item/consignee combination as specified in segment group 25.',repeat:1,length:'',type:'',level:2,children:[
		{id:2540,label:'C534',mandatory:'M',shortDesc:'PAYMENT INSTRUCTION DETAILS',desc:'Indication of method of payment employed or to be employed.',repeat:1,length:'',type:'',level:3,children:[
			{id:25400,label:'4439',mandatory:'C',shortDesc:'Payment conditions code',desc:'Code specifying the payment conditions.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:25401,label:'4431',mandatory:'C',shortDesc:'Payment guarantee means code',desc:'Code specifying the means of payment guarantee.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:25402,label:'4461',mandatory:'C',shortDesc:'Payment means code',desc:'Code identifying a means of payment.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:25403,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:25404,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:25405,label:'4435',mandatory:'C',shortDesc:'Payment channel code',desc:'Code specifying the payment channel.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]}]},
	{id:255,label:'MTD',mandatory:'C',shortDesc:'MAINTENANCE OPERATION DETAILS',desc:'A segment giving details of the maintenance on object relating to the item, such as tools and packages. The party that is responsible as well as who is paying, can also be given.',repeat:99,length:'',type:'',level:2,children:[
		{id:2550,label:'7495',mandatory:'M',shortDesc:'OBJECT TYPE CODE QUALIFIER',desc:'Code qualifying a type of object.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2551,label:'4513',mandatory:'C',shortDesc:'MAINTENANCE OPERATION CODE',desc:'Code specifying a maintenance operation.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2552,label:'3005',mandatory:'C',shortDesc:'MAINTENANCE OPERATION OPERATOR CODE',desc:'A code identifying the type of party being responsible for a maintenance operation.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2553,label:'3009',mandatory:'C',shortDesc:'MAINTENANCE OPERATION PAYER CODE',desc:'A code identifying  the type of party paying for a maintenance operation.',repeat:1,length:'0..3',type:'an',level:3,children:[]}]},
	{id:256,label:'FTX',mandatory:'C',shortDesc:'FREE TEXT',desc:'A segment with free text information, in coded or clear form, used when additional information is needed but cannot be accommodated within other segments. In computer to computer exchanges such text will normally require the receiver to process this segment manually.',repeat:99,length:'',type:'',level:2,children:[
		{id:2560,label:'4451',mandatory:'M',shortDesc:'TEXT SUBJECT CODE QUALIFIER',desc:'Code qualifying the subject of the text.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2561,label:'4453',mandatory:'C',shortDesc:'FREE TEXT FUNCTION CODE',desc:'Code specifying the function of free text.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2562,label:'C107',mandatory:'C',shortDesc:'TEXT REFERENCE',desc:'Coded reference to a standard text and its source.',repeat:1,length:'',type:'',level:3,children:[
			{id:25620,label:'4441',mandatory:'M',shortDesc:'Free text description code',desc:'Code specifying free form text.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:25621,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:25622,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:2563,label:'C108',mandatory:'C',shortDesc:'TEXT LITERAL',desc:'Free text; one to five lines.',repeat:1,length:'',type:'',level:3,children:[
			{id:25630,label:'4440',mandatory:'M',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:4,children:[]},
			{id:25631,label:'4440',mandatory:'C',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:4,children:[]},
			{id:25632,label:'4440',mandatory:'C',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:4,children:[]},
			{id:25633,label:'4440',mandatory:'C',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:4,children:[]},
			{id:25634,label:'4440',mandatory:'C',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:4,children:[]}]},
		{id:2564,label:'3453',mandatory:'C',shortDesc:'LANGUAGE NAME CODE',desc:'Code specifying the language name.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2565,label:'4447',mandatory:'C',shortDesc:'FREE TEXT FORMAT CODE',desc:'Code specifying the format of free text.',repeat:1,length:'0..3',type:'an',level:3,children:[]}]},
	{id:257,label:'GRP30',mandatory:'C',shortDesc:'CCI#CAV#MEA#',desc:'A group of segments providing product characteristic and product characteristic details.',repeat:999,length:'',type:'',level:2,children:[
		{id:2570,label:'CCI',mandatory:'M',shortDesc:'CHARACTERISTIC/CLASS ID',desc:'A segment to identify product characteristic and, or the characteristic name and characteristic relevance for the business process.',repeat:1,length:'',type:'',level:3,children:[
			{id:25700,label:'7059',mandatory:'C',shortDesc:'CLASS TYPE CODE',desc:'Code specifying the type of class.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:25701,label:'C502',mandatory:'C',shortDesc:'MEASUREMENT DETAILS',desc:'Identification of measurement type.',repeat:1,length:'',type:'',level:4,children:[
				{id:257010,label:'6313',mandatory:'C',shortDesc:'Measured attribute code',desc:'Code specifying the attribute measured.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:257011,label:'6321',mandatory:'C',shortDesc:'Measurement significance code',desc:'Code specifying the significance of a measurement.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:257012,label:'6155',mandatory:'C',shortDesc:'Non-discrete measurement name code',desc:'Code specifying the name of a non-discrete measurement.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:257013,label:'6154',mandatory:'C',shortDesc:'Non-discrete measurement name',desc:'Name of a non-discrete measurement.',repeat:1,length:'0..70',type:'an',level:5,children:[]}]},
			{id:25702,label:'C240',mandatory:'C',shortDesc:'CHARACTERISTIC DESCRIPTION',desc:'To provide a description of a characteristic.',repeat:1,length:'',type:'',level:4,children:[
				{id:257020,label:'7037',mandatory:'M',shortDesc:'Characteristic description code',desc:'A code specifying a characteristic.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:257021,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:257022,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:257023,label:'7036',mandatory:'C',shortDesc:'Characteristic description',desc:'Free form description of a characteristic.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:257024,label:'7036',mandatory:'C',shortDesc:'Characteristic description',desc:'Free form description of a characteristic.',repeat:1,length:'0..35',type:'an',level:5,children:[]}]},
			{id:25703,label:'4051',mandatory:'C',shortDesc:'CHARACTERISTIC RELEVANCE CODE',desc:'Code specifying the relevance of a characteristic.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:2571,label:'CAV',mandatory:'C',shortDesc:'CHARACTERISTIC VALUE',desc:'A segment to specify common product characteristic by value in either coded form or in free format.',repeat:10,length:'',type:'',level:3,children:[
			{id:25710,label:'C889',mandatory:'M',shortDesc:'CHARACTERISTIC VALUE',desc:'To provide the value of a characteristic.',repeat:1,length:'',type:'',level:4,children:[
				{id:257100,label:'7111',mandatory:'C',shortDesc:'Characteristic value description code',desc:'Code specifying the value of a characteristic.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:257101,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:257102,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:257103,label:'7110',mandatory:'C',shortDesc:'Characteristic value description',desc:'Free form description of the value of a characteristic.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:257104,label:'7110',mandatory:'C',shortDesc:'Characteristic value description',desc:'Free form description of the value of a characteristic.',repeat:1,length:'0..35',type:'an',level:5,children:[]}]}]},
		{id:2572,label:'MEA',mandatory:'C',shortDesc:'MEASUREMENTS',desc:'A segment indicating characteristic value being physical measurement (including measurable quantities and percentages) related to specified product characteristics (for example voltage, percentage of material contained) and where relevant measurement ranges.',repeat:10,length:'',type:'',level:3,children:[
			{id:25720,label:'6311',mandatory:'M',shortDesc:'MEASUREMENT PURPOSE CODE QUALIFIER',desc:'Code qualifying the purpose of the measurement.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:25721,label:'C502',mandatory:'C',shortDesc:'MEASUREMENT DETAILS',desc:'Identification of measurement type.',repeat:1,length:'',type:'',level:4,children:[
				{id:257210,label:'6313',mandatory:'C',shortDesc:'Measured attribute code',desc:'Code specifying the attribute measured.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:257211,label:'6321',mandatory:'C',shortDesc:'Measurement significance code',desc:'Code specifying the significance of a measurement.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:257212,label:'6155',mandatory:'C',shortDesc:'Non-discrete measurement name code',desc:'Code specifying the name of a non-discrete measurement.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:257213,label:'6154',mandatory:'C',shortDesc:'Non-discrete measurement name',desc:'Name of a non-discrete measurement.',repeat:1,length:'0..70',type:'an',level:5,children:[]}]},
			{id:25722,label:'C174',mandatory:'C',shortDesc:'VALUE/RANGE',desc:'Measurement value and relevant minimum and maximum values of the measurement range.',repeat:1,length:'',type:'',level:4,children:[
				{id:257220,label:'6411',mandatory:'M',shortDesc:'Measurement unit code',desc:'Code specifying the unit of measurement.',repeat:1,length:'0..8',type:'an',level:5,children:[]},
				{id:257221,label:'6314',mandatory:'C',shortDesc:'Measure',desc:'To specify the value of a measurement.',repeat:1,length:'0..18',type:'an',level:5,children:[]},
				{id:257222,label:'6162',mandatory:'C',shortDesc:'Range minimum quantity',desc:'To specify the minimum value of a range.',repeat:1,length:'0..18',type:'n',level:5,children:[]},
				{id:257223,label:'6152',mandatory:'C',shortDesc:'Range maximum quantity',desc:'To specify the maximum value of a range.',repeat:1,length:'0..18',type:'n',level:5,children:[]},
				{id:257224,label:'6432',mandatory:'C',shortDesc:'Significant digits quantity',desc:'Count of the number of significant digits.',repeat:1,length:'0..2',type:'n',level:5,children:[]}]},
			{id:25723,label:'7383',mandatory:'C',shortDesc:'SURFACE OR LAYER CODE',desc:'Code specifying the surface or layer of an object.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]}]},
	{id:258,label:'GRP31',mandatory:'C',shortDesc:'PYT#DTM#PCD#GRP32#',desc:'A group of segments specifying the terms of payment and accounting classifications applicable to the line item.',repeat:10,length:'',type:'',level:2,children:[
		{id:2580,label:'PYT',mandatory:'M',shortDesc:'PAYMENT TERMS',desc:'A segment identifying the payment terms and date/time basis.',repeat:1,length:'',type:'',level:3,children:[
			{id:25800,label:'4279',mandatory:'M',shortDesc:'PAYMENT TERMS TYPE CODE QUALIFIER',desc:'Code qualifying the type of payment terms.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:25801,label:'C019',mandatory:'C',shortDesc:'PAYMENT TERMS',desc:'Terms of payment information.',repeat:1,length:'',type:'',level:4,children:[
				{id:258010,label:'4277',mandatory:'C',shortDesc:'Payment terms description identifier',desc:'Identification of the terms of payment between the parties to a transaction (generic term).',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:258011,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:258012,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:258013,label:'4276',mandatory:'C',shortDesc:'Payment terms description',desc:'Free form description of the conditions of payment between the parties to a transaction.',repeat:1,length:'0..35',type:'an',level:5,children:[]}]},
			{id:25802,label:'2475',mandatory:'C',shortDesc:'EVENT TIME REFERENCE CODE',desc:'Code specifying a time that references an event that will or has occurred.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:25803,label:'2009',mandatory:'C',shortDesc:'TERMS TIME RELATION CODE',desc:'Code relating terms to a reference date, time or period.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:25804,label:'2151',mandatory:'C',shortDesc:'PERIOD TYPE CODE',desc:'Code specifying the type of period.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:25805,label:'2152',mandatory:'C',shortDesc:'PERIOD COUNT QUANTITY',desc:'Count of the number of periods.',repeat:1,length:'0..3',type:'n',level:4,children:[]}]},
		{id:2581,label:'DTM',mandatory:'C',shortDesc:'DATE/TIME/PERIOD',desc:'A segment giving the specific date/time/period, if needed, of any payments, discounts, installments etc.',repeat:5,length:'',type:'',level:3,children:[
			{id:25810,label:'C507',mandatory:'M',shortDesc:'DATE/TIME/PERIOD',desc:'Date and/or time, or period relevant to the specified date/time/period type.',repeat:1,length:'',type:'',level:4,children:[
				{id:258100,label:'2005',mandatory:'M',shortDesc:'Date or time or period function code qualifier',desc:'Code qualifying the function of a date, time or period.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:258101,label:'2380',mandatory:'C',shortDesc:'Date or time or period text',desc:'The value of a date, a date and time, a time or of a period in a specified representation.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:258102,label:'2379',mandatory:'C',shortDesc:'Date or time or period format code',desc:'Code specifying the representation of a date, time or period.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]}]},
		{id:2582,label:'PCD',mandatory:'C',shortDesc:'PERCENTAGE DETAILS',desc:'A segment specifying the discount, interest, penalty as well as installment percentages.',repeat:1,length:'',type:'',level:3,children:[
			{id:25820,label:'C501',mandatory:'M',shortDesc:'PERCENTAGE DETAILS',desc:'Percentage relating to a specified basis.',repeat:1,length:'',type:'',level:4,children:[
				{id:258200,label:'5245',mandatory:'M',shortDesc:'Percentage type code qualifier',desc:'Code qualifying the type of percentage.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:258201,label:'5482',mandatory:'C',shortDesc:'Percentage',desc:'To specify a percentage.',repeat:1,length:'0..10',type:'n',level:5,children:[]},
				{id:258202,label:'5249',mandatory:'C',shortDesc:'Percentage basis identification code',desc:'Code specifying the basis on which a percentage is calculated.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:258203,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:258204,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]},
			{id:25821,label:'4405',mandatory:'C',shortDesc:'STATUS DESCRIPTION CODE',desc:'Code specifying a status.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:2583,label:'GRP32',mandatory:'C',shortDesc:'MOA#GIR#',desc:'A group of segments identifying accounting classification reference number data and related monetary amounts at the line item level.',repeat:9999,length:'',type:'',level:3,children:[
			{id:25830,label:'MOA',mandatory:'M',shortDesc:'MONETARY AMOUNT',desc:'A segment specifying the amount associated with the specified accounting classification reference number data and payment information.',repeat:1,length:'',type:'',level:4,children:[
				{id:258300,label:'C516',mandatory:'M',shortDesc:'MONETARY AMOUNT',desc:'Amount of goods or services stated as a monetary amount in a specified currency.',repeat:1,length:'',type:'',level:5,children:[
					{id:2583000,label:'5025',mandatory:'M',shortDesc:'Monetary amount type code qualifier',desc:'Code qualifying the type of monetary amount.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2583001,label:'5004',mandatory:'C',shortDesc:'Monetary amount',desc:'To specify a monetary amount.',repeat:1,length:'0..35',type:'n',level:6,children:[]},
					{id:2583002,label:'6345',mandatory:'C',shortDesc:'Currency identification code',desc:'Code specifying a monetary unit.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2583003,label:'6343',mandatory:'C',shortDesc:'Currency type code qualifier',desc:'Code qualifying the type of currency.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2583004,label:'4405',mandatory:'C',shortDesc:'Status description code',desc:'Code specifying a status.',repeat:1,length:'0..3',type:'an',level:6,children:[]}]}]},
			{id:25831,label:'GIR',mandatory:'C',shortDesc:'RELATED IDENTIFICATION NUMBERS',desc:'A segment providing related accounting identification numbers.',repeat:9,length:'',type:'',level:4,children:[
				{id:258310,label:'7297',mandatory:'M',shortDesc:'SET TYPE CODE QUALIFIER',desc:'Code qualifying the type of set.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:258311,label:'C206',mandatory:'M',shortDesc:'IDENTIFICATION NUMBER',desc:'The identification of an object.',repeat:1,length:'',type:'',level:5,children:[
					{id:2583110,label:'7402',mandatory:'M',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:6,children:[]},
					{id:2583111,label:'7405',mandatory:'C',shortDesc:'Object identification code qualifier',desc:'Code qualifying the identification of an object.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2583112,label:'4405',mandatory:'C',shortDesc:'Status description code',desc:'Code specifying a status.',repeat:1,length:'0..3',type:'an',level:6,children:[]}]},
				{id:258312,label:'C206',mandatory:'C',shortDesc:'IDENTIFICATION NUMBER',desc:'The identification of an object.',repeat:1,length:'',type:'',level:5,children:[
					{id:2583120,label:'7402',mandatory:'M',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:6,children:[]},
					{id:2583121,label:'7405',mandatory:'C',shortDesc:'Object identification code qualifier',desc:'Code qualifying the identification of an object.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2583122,label:'4405',mandatory:'C',shortDesc:'Status description code',desc:'Code specifying a status.',repeat:1,length:'0..3',type:'an',level:6,children:[]}]},
				{id:258313,label:'C206',mandatory:'C',shortDesc:'IDENTIFICATION NUMBER',desc:'The identification of an object.',repeat:1,length:'',type:'',level:5,children:[
					{id:2583130,label:'7402',mandatory:'M',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:6,children:[]},
					{id:2583131,label:'7405',mandatory:'C',shortDesc:'Object identification code qualifier',desc:'Code qualifying the identification of an object.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2583132,label:'4405',mandatory:'C',shortDesc:'Status description code',desc:'Code specifying a status.',repeat:1,length:'0..3',type:'an',level:6,children:[]}]},
				{id:258314,label:'C206',mandatory:'C',shortDesc:'IDENTIFICATION NUMBER',desc:'The identification of an object.',repeat:1,length:'',type:'',level:5,children:[
					{id:2583140,label:'7402',mandatory:'M',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:6,children:[]},
					{id:2583141,label:'7405',mandatory:'C',shortDesc:'Object identification code qualifier',desc:'Code qualifying the identification of an object.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2583142,label:'4405',mandatory:'C',shortDesc:'Status description code',desc:'Code specifying a status.',repeat:1,length:'0..3',type:'an',level:6,children:[]}]},
				{id:258315,label:'C206',mandatory:'C',shortDesc:'IDENTIFICATION NUMBER',desc:'The identification of an object.',repeat:1,length:'',type:'',level:5,children:[
					{id:2583150,label:'7402',mandatory:'M',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:6,children:[]},
					{id:2583151,label:'7405',mandatory:'C',shortDesc:'Object identification code qualifier',desc:'Code qualifying the identification of an object.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2583152,label:'4405',mandatory:'C',shortDesc:'Status description code',desc:'Code specifying a status.',repeat:1,length:'0..3',type:'an',level:6,children:[]}]}]}]}]},
	{id:259,label:'GRP33',mandatory:'C',shortDesc:'PRI#CUX#APR#RNG#DTM#',desc:'A group of segments identifying the relevant pricing information for the goods or services ordered.',repeat:25,length:'',type:'',level:2,children:[
		{id:2590,label:'PRI',mandatory:'M',shortDesc:'PRICE DETAILS',desc:'A segment to specify the price type and amount. The price used in the calculation of the line amount will be identified as 'price'.',repeat:1,length:'',type:'',level:3,children:[
			{id:25900,label:'C509',mandatory:'C',shortDesc:'PRICE INFORMATION',desc:'Identification of price type, price and related details.',repeat:1,length:'',type:'',level:4,children:[
				{id:259000,label:'5125',mandatory:'M',shortDesc:'Price code qualifier',desc:'Code qualifying a price.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:259001,label:'5118',mandatory:'C',shortDesc:'Price amount',desc:'To specify a price.',repeat:1,length:'0..15',type:'n',level:5,children:[]},
				{id:259002,label:'5375',mandatory:'C',shortDesc:'Price type code',desc:'Code specifying the type of price.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:259003,label:'5387',mandatory:'C',shortDesc:'Price specification code',desc:'Code identifying pricing specification.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:259004,label:'5284',mandatory:'C',shortDesc:'Unit price basis quantity',desc:'To specify the basis for a unit price.',repeat:1,length:'0..9',type:'n',level:5,children:[]},
				{id:259005,label:'6411',mandatory:'C',shortDesc:'Measurement unit code',desc:'Code specifying the unit of measurement.',repeat:1,length:'0..8',type:'an',level:5,children:[]}]},
			{id:25901,label:'5213',mandatory:'C',shortDesc:'SUB-LINE ITEM PRICE CHANGE OPERATION CODE',desc:'Code specifying the price change operation for a sub- line item.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:2591,label:'CUX',mandatory:'C',shortDesc:'CURRENCIES',desc:'A segment to allow to specify the price in a different currency that in segment group 7.',repeat:1,length:'',type:'',level:3,children:[
			{id:25910,label:'C504',mandatory:'C',shortDesc:'CURRENCY DETAILS',desc:'The usage to which a currency relates.',repeat:1,length:'',type:'',level:4,children:[
				{id:259100,label:'6347',mandatory:'M',shortDesc:'Currency usage code qualifier',desc:'Code qualifying the usage of a currency.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:259101,label:'6345',mandatory:'C',shortDesc:'Currency identification code',desc:'Code specifying a monetary unit.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:259102,label:'6343',mandatory:'C',shortDesc:'Currency type code qualifier',desc:'Code qualifying the type of currency.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:259103,label:'6348',mandatory:'C',shortDesc:'Currency rate',desc:'To specify the value of the multiplication factor used in expressing currency units.',repeat:1,length:'0..4',type:'n',level:5,children:[]}]},
			{id:25911,label:'C504',mandatory:'C',shortDesc:'CURRENCY DETAILS',desc:'The usage to which a currency relates.',repeat:1,length:'',type:'',level:4,children:[
				{id:259110,label:'6347',mandatory:'M',shortDesc:'Currency usage code qualifier',desc:'Code qualifying the usage of a currency.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:259111,label:'6345',mandatory:'C',shortDesc:'Currency identification code',desc:'Code specifying a monetary unit.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:259112,label:'6343',mandatory:'C',shortDesc:'Currency type code qualifier',desc:'Code qualifying the type of currency.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:259113,label:'6348',mandatory:'C',shortDesc:'Currency rate',desc:'To specify the value of the multiplication factor used in expressing currency units.',repeat:1,length:'0..4',type:'n',level:5,children:[]}]},
			{id:25912,label:'5402',mandatory:'C',shortDesc:'CURRENCY EXCHANGE RATE',desc:'To specify the rate at which one specified currency is expressed in another specified currency.',repeat:1,length:'0..12',type:'n',level:4,children:[]},
			{id:25913,label:'6341',mandatory:'C',shortDesc:'EXCHANGE RATE CURRENCY MARKET IDENTIFIER',desc:'To identify an exchange rate currency market.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:2592,label:'APR',mandatory:'C',shortDesc:'ADDITIONAL PRICE INFORMATION',desc:'A segment to identify pricing information such as a price multiplier, the class or type of trade and additionally identifying the reason for any changes.',repeat:99,length:'',type:'',level:3,children:[
			{id:25920,label:'4043',mandatory:'C',shortDesc:'TRADE CLASS CODE',desc:'Code identifying the class of trade.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:25921,label:'C138',mandatory:'C',shortDesc:'PRICE MULTIPLIER INFORMATION',desc:'Price multiplier and its identification.',repeat:1,length:'',type:'',level:4,children:[
				{id:259210,label:'5394',mandatory:'M',shortDesc:'Price multiplier rate',desc:'To specify the rate of a price multiplier.',repeat:1,length:'0..12',type:'n',level:5,children:[]},
				{id:259211,label:'5393',mandatory:'C',shortDesc:'Price multiplier type code qualifier',desc:'Code qualifying the type of price multiplier.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]},
			{id:25922,label:'C960',mandatory:'C',shortDesc:'REASON FOR CHANGE',desc:'Code and/or description of the reason for a change.',repeat:1,length:'',type:'',level:4,children:[
				{id:259220,label:'4295',mandatory:'C',shortDesc:'Change reason description code',desc:'Code specifying the reason for a change.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:259221,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:259222,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:259223,label:'4294',mandatory:'C',shortDesc:'Change reason description',desc:'Free form description of the reason for change.',repeat:1,length:'0..35',type:'an',level:5,children:[]}]}]},
		{id:2593,label:'RNG',mandatory:'C',shortDesc:'RANGE DETAILS',desc:'A segment to identify the ranges (quantity, amount, etc) to which the additional price information applies.',repeat:1,length:'',type:'',level:3,children:[
			{id:25930,label:'6167',mandatory:'M',shortDesc:'RANGE TYPE CODE QUALIFIER',desc:'Code qualifying a type of range.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:25931,label:'C280',mandatory:'C',shortDesc:'RANGE',desc:'Range minimum and maximum limits.',repeat:1,length:'',type:'',level:4,children:[
				{id:259310,label:'6411',mandatory:'M',shortDesc:'Measurement unit code',desc:'Code specifying the unit of measurement.',repeat:1,length:'0..8',type:'an',level:5,children:[]},
				{id:259311,label:'6162',mandatory:'C',shortDesc:'Range minimum quantity',desc:'To specify the minimum value of a range.',repeat:1,length:'0..18',type:'n',level:5,children:[]},
				{id:259312,label:'6152',mandatory:'C',shortDesc:'Range maximum quantity',desc:'To specify the maximum value of a range.',repeat:1,length:'0..18',type:'n',level:5,children:[]}]}]},
		{id:2594,label:'DTM',mandatory:'C',shortDesc:'DATE/TIME/PERIOD',desc:'A segment to identify the date/time/period information related to the price change e.g. period of validity.',repeat:5,length:'',type:'',level:3,children:[
			{id:25940,label:'C507',mandatory:'M',shortDesc:'DATE/TIME/PERIOD',desc:'Date and/or time, or period relevant to the specified date/time/period type.',repeat:1,length:'',type:'',level:4,children:[
				{id:259400,label:'2005',mandatory:'M',shortDesc:'Date or time or period function code qualifier',desc:'Code qualifying the function of a date, time or period.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:259401,label:'2380',mandatory:'C',shortDesc:'Date or time or period text',desc:'The value of a date, a date and time, a time or of a period in a specified representation.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:259402,label:'2379',mandatory:'C',shortDesc:'Date or time or period format code',desc:'Code specifying the representation of a date, time or period.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]}]}]},
	{id:260,label:'GRP34',mandatory:'C',shortDesc:'RFF#DTM#GEI#MOA#',desc:'A group of segments giving references and where necessary, their dates, relating to the line item.',repeat:9999,length:'',type:'',level:2,children:[
		{id:2600,label:'RFF',mandatory:'M',shortDesc:'REFERENCE',desc:'A segment identifying the reference by its number and where appropriate a line number within a document.',repeat:1,length:'',type:'',level:3,children:[
			{id:26000,label:'C506',mandatory:'M',shortDesc:'REFERENCE',desc:'Identification of a reference.',repeat:1,length:'',type:'',level:4,children:[
				{id:260000,label:'1153',mandatory:'M',shortDesc:'Reference code qualifier',desc:'Code qualifying a reference.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:260001,label:'1154',mandatory:'C',shortDesc:'Reference identifier',desc:'Identifies a reference.',repeat:1,length:'0..70',type:'an',level:5,children:[]},
				{id:260002,label:'1156',mandatory:'C',shortDesc:'Document line identifier',desc:'To identify a line of a document.',repeat:1,length:'0..6',type:'an',level:5,children:[]},
				{id:260003,label:'1056',mandatory:'C',shortDesc:'Version identifier',desc:'To identify a version.',repeat:1,length:'0..9',type:'an',level:5,children:[]},
				{id:260004,label:'1060',mandatory:'C',shortDesc:'Revision identifier',desc:'To identify a revision.',repeat:1,length:'0..6',type:'an',level:5,children:[]}]}]},
		{id:2601,label:'DTM',mandatory:'C',shortDesc:'DATE/TIME/PERIOD',desc:'A segment specifying the date/time related to the reference.',repeat:5,length:'',type:'',level:3,children:[
			{id:26010,label:'C507',mandatory:'M',shortDesc:'DATE/TIME/PERIOD',desc:'Date and/or time, or period relevant to the specified date/time/period type.',repeat:1,length:'',type:'',level:4,children:[
				{id:260100,label:'2005',mandatory:'M',shortDesc:'Date or time or period function code qualifier',desc:'Code qualifying the function of a date, time or period.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:260101,label:'2380',mandatory:'C',shortDesc:'Date or time or period text',desc:'The value of a date, a date and time, a time or of a period in a specified representation.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:260102,label:'2379',mandatory:'C',shortDesc:'Date or time or period format code',desc:'Code specifying the representation of a date, time or period.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]}]},
		{id:2602,label:'GEI',mandatory:'C',shortDesc:'PROCESSING INFORMATION',desc:'A segment specifying general processing indicators associated with the reference in question such as budgetary analysis information.',repeat:99,length:'',type:'',level:3,children:[
			{id:26020,label:'9649',mandatory:'M',shortDesc:'PROCESSING INFORMATION CODE QUALIFIER',desc:'Code qualifying the processing information.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:26021,label:'C012',mandatory:'C',shortDesc:'PROCESSING INDICATOR',desc:'Identification of the processing indicator.',repeat:1,length:'',type:'',level:4,children:[
				{id:260210,label:'7365',mandatory:'C',shortDesc:'Processing indicator description code',desc:'Code specifying a processing indicator.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:260211,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:260212,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:260213,label:'7364',mandatory:'C',shortDesc:'Processing indicator description',desc:'Free form description of a processing indicator.',repeat:1,length:'0..35',type:'an',level:5,children:[]}]},
			{id:26022,label:'7187',mandatory:'C',shortDesc:'PROCESS TYPE DESCRIPTION CODE',desc:'Code specifying a type of process.',repeat:1,length:'0..17',type:'an',level:4,children:[]}]},
		{id:2603,label:'MOA',mandatory:'C',shortDesc:'MONETARY AMOUNT',desc:'A segment specifying the monetary amounts associated with the reference in question (e.g. the budgetary amount).',repeat:99,length:'',type:'',level:3,children:[
			{id:26030,label:'C516',mandatory:'M',shortDesc:'MONETARY AMOUNT',desc:'Amount of goods or services stated as a monetary amount in a specified currency.',repeat:1,length:'',type:'',level:4,children:[
				{id:260300,label:'5025',mandatory:'M',shortDesc:'Monetary amount type code qualifier',desc:'Code qualifying the type of monetary amount.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:260301,label:'5004',mandatory:'C',shortDesc:'Monetary amount',desc:'To specify a monetary amount.',repeat:1,length:'0..35',type:'n',level:5,children:[]},
				{id:260302,label:'6345',mandatory:'C',shortDesc:'Currency identification code',desc:'Code specifying a monetary unit.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:260303,label:'6343',mandatory:'C',shortDesc:'Currency type code qualifier',desc:'Code qualifying the type of currency.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:260304,label:'4405',mandatory:'C',shortDesc:'Status description code',desc:'Code specifying a status.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]}]}]},
	{id:261,label:'GRP35',mandatory:'C',shortDesc:'PAC#MEA#QTY#DTM#GRP36#GRP37#',desc:'A group of segments identifying the packaging, physical dimensions, and marks and numbers for goods referenced in the line item.',repeat:99,length:'',type:'',level:2,children:[
		{id:2610,label:'PAC',mandatory:'M',shortDesc:'PACKAGE',desc:'A segment specifying the number of packages and the physical type of packaging for the line item e.g. pallet type.',repeat:1,length:'',type:'',level:3,children:[
			{id:26100,label:'7224',mandatory:'C',shortDesc:'PACKAGE QUANTITY',desc:'To specify the number of packages.',repeat:1,length:'0..8',type:'n',level:4,children:[]},
			{id:26101,label:'C531',mandatory:'C',shortDesc:'PACKAGING DETAILS',desc:'Packaging level and details, terms and conditions.',repeat:1,length:'',type:'',level:4,children:[
				{id:261010,label:'7075',mandatory:'C',shortDesc:'Packaging level code',desc:'Code specifying a level of packaging.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:261011,label:'7233',mandatory:'C',shortDesc:'Packaging related description code',desc:'Code specifying information related to packaging.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:261012,label:'7073',mandatory:'C',shortDesc:'Packaging terms and conditions code',desc:'Code specifying the packaging terms and conditions.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]},
			{id:26102,label:'C202',mandatory:'C',shortDesc:'PACKAGE TYPE',desc:'Type of package by name or by code from a specified source.',repeat:1,length:'',type:'',level:4,children:[
				{id:261020,label:'7065',mandatory:'C',shortDesc:'Package type description code',desc:'Code specifying the type of package.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:261021,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:261022,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:261023,label:'7064',mandatory:'C',shortDesc:'Type of packages',desc:'Description of the form in which goods are presented.',repeat:1,length:'0..35',type:'an',level:5,children:[]}]},
			{id:26103,label:'C402',mandatory:'C',shortDesc:'PACKAGE TYPE IDENTIFICATION',desc:'Identification of the form in which goods are described.',repeat:1,length:'',type:'',level:4,children:[
				{id:261030,label:'7077',mandatory:'M',shortDesc:'Description format code',desc:'Code specifying the format of a description.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:261031,label:'7064',mandatory:'M',shortDesc:'Type of packages',desc:'Description of the form in which goods are presented.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:261032,label:'7143',mandatory:'C',shortDesc:'Item type identification code',desc:'Coded identification of an item type.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:261033,label:'7064',mandatory:'C',shortDesc:'Type of packages',desc:'Description of the form in which goods are presented.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:261034,label:'7143',mandatory:'C',shortDesc:'Item type identification code',desc:'Coded identification of an item type.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]},
			{id:26104,label:'C532',mandatory:'C',shortDesc:'RETURNABLE PACKAGE DETAILS',desc:'Indication of responsibility for payment and load contents of returnable packages.',repeat:1,length:'',type:'',level:4,children:[
				{id:261040,label:'8395',mandatory:'C',shortDesc:'Returnable package freight payment responsibility code',desc:'Code specifying the responsibility for the freight payment for a returnable package.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:261041,label:'8393',mandatory:'C',shortDesc:'Returnable package load contents code',desc:'Code specifying the load contents for a returnable package.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]}]},
		{id:2611,label:'MEA',mandatory:'C',shortDesc:'MEASUREMENTS',desc:'A segment specifying physical measurements of packages described in the PAC segment e.g. cube or gross weight.',repeat:5,length:'',type:'',level:3,children:[
			{id:26110,label:'6311',mandatory:'M',shortDesc:'MEASUREMENT PURPOSE CODE QUALIFIER',desc:'Code qualifying the purpose of the measurement.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:26111,label:'C502',mandatory:'C',shortDesc:'MEASUREMENT DETAILS',desc:'Identification of measurement type.',repeat:1,length:'',type:'',level:4,children:[
				{id:261110,label:'6313',mandatory:'C',shortDesc:'Measured attribute code',desc:'Code specifying the attribute measured.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:261111,label:'6321',mandatory:'C',shortDesc:'Measurement significance code',desc:'Code specifying the significance of a measurement.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:261112,label:'6155',mandatory:'C',shortDesc:'Non-discrete measurement name code',desc:'Code specifying the name of a non-discrete measurement.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:261113,label:'6154',mandatory:'C',shortDesc:'Non-discrete measurement name',desc:'Name of a non-discrete measurement.',repeat:1,length:'0..70',type:'an',level:5,children:[]}]},
			{id:26112,label:'C174',mandatory:'C',shortDesc:'VALUE/RANGE',desc:'Measurement value and relevant minimum and maximum values of the measurement range.',repeat:1,length:'',type:'',level:4,children:[
				{id:261120,label:'6411',mandatory:'M',shortDesc:'Measurement unit code',desc:'Code specifying the unit of measurement.',repeat:1,length:'0..8',type:'an',level:5,children:[]},
				{id:261121,label:'6314',mandatory:'C',shortDesc:'Measure',desc:'To specify the value of a measurement.',repeat:1,length:'0..18',type:'an',level:5,children:[]},
				{id:261122,label:'6162',mandatory:'C',shortDesc:'Range minimum quantity',desc:'To specify the minimum value of a range.',repeat:1,length:'0..18',type:'n',level:5,children:[]},
				{id:261123,label:'6152',mandatory:'C',shortDesc:'Range maximum quantity',desc:'To specify the maximum value of a range.',repeat:1,length:'0..18',type:'n',level:5,children:[]},
				{id:261124,label:'6432',mandatory:'C',shortDesc:'Significant digits quantity',desc:'Count of the number of significant digits.',repeat:1,length:'0..2',type:'n',level:5,children:[]}]},
			{id:26113,label:'7383',mandatory:'C',shortDesc:'SURFACE OR LAYER CODE',desc:'Code specifying the surface or layer of an object.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:2612,label:'QTY',mandatory:'C',shortDesc:'QUANTITY',desc:'A segment specifying the maximum quantity number of packages which can be stacked safely on another and/or the number of items normally contained within the package.',repeat:5,length:'',type:'',level:3,children:[
			{id:26120,label:'C186',mandatory:'M',shortDesc:'QUANTITY DETAILS',desc:'Quantity information in a transaction, qualified when relevant.',repeat:1,length:'',type:'',level:4,children:[
				{id:261200,label:'6063',mandatory:'M',shortDesc:'Quantity type code qualifier',desc:'Code qualifying the type of quantity.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:261201,label:'6060',mandatory:'M',shortDesc:'Quantity',desc:'Alphanumeric representation of a quantity.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:261202,label:'6411',mandatory:'C',shortDesc:'Measurement unit code',desc:'Code specifying the unit of measurement.',repeat:1,length:'0..8',type:'an',level:5,children:[]}]}]},
		{id:2613,label:'DTM',mandatory:'C',shortDesc:'DATE/TIME/PERIOD',desc:'A segment to indicate the validity period in relation to the specified article.',repeat:5,length:'',type:'',level:3,children:[
			{id:26130,label:'C507',mandatory:'M',shortDesc:'DATE/TIME/PERIOD',desc:'Date and/or time, or period relevant to the specified date/time/period type.',repeat:1,length:'',type:'',level:4,children:[
				{id:261300,label:'2005',mandatory:'M',shortDesc:'Date or time or period function code qualifier',desc:'Code qualifying the function of a date, time or period.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:261301,label:'2380',mandatory:'C',shortDesc:'Date or time or period text',desc:'The value of a date, a date and time, a time or of a period in a specified representation.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:261302,label:'2379',mandatory:'C',shortDesc:'Date or time or period format code',desc:'Code specifying the representation of a date, time or period.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]}]},
		{id:2614,label:'GRP36',mandatory:'C',shortDesc:'RFF#DTM#',desc:'A segment group to give reference to e.g. a packing instruction document relevant to a particular package type and its date/time/period of issue.',repeat:1,length:'',type:'',level:3,children:[
			{id:26140,label:'RFF',mandatory:'M',shortDesc:'REFERENCE',desc:'A segment identifying the packing instruction document.',repeat:1,length:'',type:'',level:4,children:[
				{id:261400,label:'C506',mandatory:'M',shortDesc:'REFERENCE',desc:'Identification of a reference.',repeat:1,length:'',type:'',level:5,children:[
					{id:2614000,label:'1153',mandatory:'M',shortDesc:'Reference code qualifier',desc:'Code qualifying a reference.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2614001,label:'1154',mandatory:'C',shortDesc:'Reference identifier',desc:'Identifies a reference.',repeat:1,length:'0..70',type:'an',level:6,children:[]},
					{id:2614002,label:'1156',mandatory:'C',shortDesc:'Document line identifier',desc:'To identify a line of a document.',repeat:1,length:'0..6',type:'an',level:6,children:[]},
					{id:2614003,label:'1056',mandatory:'C',shortDesc:'Version identifier',desc:'To identify a version.',repeat:1,length:'0..9',type:'an',level:6,children:[]},
					{id:2614004,label:'1060',mandatory:'C',shortDesc:'Revision identifier',desc:'To identify a revision.',repeat:1,length:'0..6',type:'an',level:6,children:[]}]}]},
			{id:26141,label:'DTM',mandatory:'C',shortDesc:'DATE/TIME/PERIOD',desc:'A segment specifying the dates relevant to the referred document.',repeat:5,length:'',type:'',level:4,children:[
				{id:261410,label:'C507',mandatory:'M',shortDesc:'DATE/TIME/PERIOD',desc:'Date and/or time, or period relevant to the specified date/time/period type.',repeat:1,length:'',type:'',level:5,children:[
					{id:2614100,label:'2005',mandatory:'M',shortDesc:'Date or time or period function code qualifier',desc:'Code qualifying the function of a date, time or period.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2614101,label:'2380',mandatory:'C',shortDesc:'Date or time or period text',desc:'The value of a date, a date and time, a time or of a period in a specified representation.',repeat:1,length:'0..35',type:'an',level:6,children:[]},
					{id:2614102,label:'2379',mandatory:'C',shortDesc:'Date or time or period format code',desc:'Code specifying the representation of a date, time or period.',repeat:1,length:'0..3',type:'an',level:6,children:[]}]}]}]},
		{id:2615,label:'GRP37',mandatory:'C',shortDesc:'PCI#RFF#DTM#GIN#',desc:'A group of segments specifying the markings and labels on individual physical units.',repeat:5,length:'',type:'',level:3,children:[
			{id:26150,label:'PCI',mandatory:'M',shortDesc:'PACKAGE IDENTIFICATION',desc:'A segment specifying markings and labels used on individual physical units (packages) described in the PAC segment.',repeat:1,length:'',type:'',level:4,children:[
				{id:261500,label:'4233',mandatory:'C',shortDesc:'MARKING INSTRUCTIONS CODE',desc:'Code specifying instructions for marking.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:261501,label:'C210',mandatory:'C',shortDesc:'MARKS & LABELS',desc:'Shipping marks on packages in free text; one to ten lines.',repeat:1,length:'',type:'',level:5,children:[
					{id:2615010,label:'7102',mandatory:'M',shortDesc:'Shipping marks description',desc:'Free form description of the shipping marks.',repeat:1,length:'0..35',type:'an',level:6,children:[]},
					{id:2615011,label:'7102',mandatory:'C',shortDesc:'Shipping marks description',desc:'Free form description of the shipping marks.',repeat:1,length:'0..35',type:'an',level:6,children:[]},
					{id:2615012,label:'7102',mandatory:'C',shortDesc:'Shipping marks description',desc:'Free form description of the shipping marks.',repeat:1,length:'0..35',type:'an',level:6,children:[]},
					{id:2615013,label:'7102',mandatory:'C',shortDesc:'Shipping marks description',desc:'Free form description of the shipping marks.',repeat:1,length:'0..35',type:'an',level:6,children:[]},
					{id:2615014,label:'7102',mandatory:'C',shortDesc:'Shipping marks description',desc:'Free form description of the shipping marks.',repeat:1,length:'0..35',type:'an',level:6,children:[]},
					{id:2615015,label:'7102',mandatory:'C',shortDesc:'Shipping marks description',desc:'Free form description of the shipping marks.',repeat:1,length:'0..35',type:'an',level:6,children:[]},
					{id:2615016,label:'7102',mandatory:'C',shortDesc:'Shipping marks description',desc:'Free form description of the shipping marks.',repeat:1,length:'0..35',type:'an',level:6,children:[]},
					{id:2615017,label:'7102',mandatory:'C',shortDesc:'Shipping marks description',desc:'Free form description of the shipping marks.',repeat:1,length:'0..35',type:'an',level:6,children:[]},
					{id:2615018,label:'7102',mandatory:'C',shortDesc:'Shipping marks description',desc:'Free form description of the shipping marks.',repeat:1,length:'0..35',type:'an',level:6,children:[]},
					{id:2615019,label:'7102',mandatory:'C',shortDesc:'Shipping marks description',desc:'Free form description of the shipping marks.',repeat:1,length:'0..35',type:'an',level:6,children:[]}]},
				{id:261502,label:'8169',mandatory:'C',shortDesc:'FULL OR EMPTY INDICATOR CODE',desc:'Code indicating whether an object is full or empty.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:261503,label:'C827',mandatory:'C',shortDesc:'TYPE OF MARKING',desc:'Specification of the type of marking that reflects the method that was used and the conventions adhered to for marking (e.g. of packages).',repeat:1,length:'',type:'',level:5,children:[
					{id:2615030,label:'7511',mandatory:'M',shortDesc:'Marking type code',desc:'Code specifying the type of marking.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2615031,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:6,children:[]},
					{id:2615032,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:6,children:[]}]}]},
			{id:26151,label:'RFF',mandatory:'C',shortDesc:'REFERENCE',desc:'A segment identifying the master label number.',repeat:1,length:'',type:'',level:4,children:[
				{id:261510,label:'C506',mandatory:'M',shortDesc:'REFERENCE',desc:'Identification of a reference.',repeat:1,length:'',type:'',level:5,children:[
					{id:2615100,label:'1153',mandatory:'M',shortDesc:'Reference code qualifier',desc:'Code qualifying a reference.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2615101,label:'1154',mandatory:'C',shortDesc:'Reference identifier',desc:'Identifies a reference.',repeat:1,length:'0..70',type:'an',level:6,children:[]},
					{id:2615102,label:'1156',mandatory:'C',shortDesc:'Document line identifier',desc:'To identify a line of a document.',repeat:1,length:'0..6',type:'an',level:6,children:[]},
					{id:2615103,label:'1056',mandatory:'C',shortDesc:'Version identifier',desc:'To identify a version.',repeat:1,length:'0..9',type:'an',level:6,children:[]},
					{id:2615104,label:'1060',mandatory:'C',shortDesc:'Revision identifier',desc:'To identify a revision.',repeat:1,length:'0..6',type:'an',level:6,children:[]}]}]},
			{id:26152,label:'DTM',mandatory:'C',shortDesc:'DATE/TIME/PERIOD',desc:'A segment specifying the dates relevant to the package markings.',repeat:5,length:'',type:'',level:4,children:[
				{id:261520,label:'C507',mandatory:'M',shortDesc:'DATE/TIME/PERIOD',desc:'Date and/or time, or period relevant to the specified date/time/period type.',repeat:1,length:'',type:'',level:5,children:[
					{id:2615200,label:'2005',mandatory:'M',shortDesc:'Date or time or period function code qualifier',desc:'Code qualifying the function of a date, time or period.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2615201,label:'2380',mandatory:'C',shortDesc:'Date or time or period text',desc:'The value of a date, a date and time, a time or of a period in a specified representation.',repeat:1,length:'0..35',type:'an',level:6,children:[]},
					{id:2615202,label:'2379',mandatory:'C',shortDesc:'Date or time or period format code',desc:'Code specifying the representation of a date, time or period.',repeat:1,length:'0..3',type:'an',level:6,children:[]}]}]},
			{id:26153,label:'GIN',mandatory:'C',shortDesc:'GOODS IDENTITY NUMBER',desc:'A segment identifying the number or ranges of numbers for use with the package markings.',repeat:10,length:'',type:'',level:4,children:[
				{id:261530,label:'7405',mandatory:'M',shortDesc:'OBJECT IDENTIFICATION CODE QUALIFIER',desc:'Code qualifying the identification of an object.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:261531,label:'C208',mandatory:'M',shortDesc:'IDENTITY NUMBER RANGE',desc:'Goods item identification numbers, start and end of consecutively numbered range.',repeat:1,length:'',type:'',level:5,children:[
					{id:2615310,label:'7402',mandatory:'M',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:6,children:[]},
					{id:2615311,label:'7402',mandatory:'C',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:6,children:[]}]},
				{id:261532,label:'C208',mandatory:'C',shortDesc:'IDENTITY NUMBER RANGE',desc:'Goods item identification numbers, start and end of consecutively numbered range.',repeat:1,length:'',type:'',level:5,children:[
					{id:2615320,label:'7402',mandatory:'M',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:6,children:[]},
					{id:2615321,label:'7402',mandatory:'C',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:6,children:[]}]},
				{id:261533,label:'C208',mandatory:'C',shortDesc:'IDENTITY NUMBER RANGE',desc:'Goods item identification numbers, start and end of consecutively numbered range.',repeat:1,length:'',type:'',level:5,children:[
					{id:2615330,label:'7402',mandatory:'M',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:6,children:[]},
					{id:2615331,label:'7402',mandatory:'C',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:6,children:[]}]},
				{id:261534,label:'C208',mandatory:'C',shortDesc:'IDENTITY NUMBER RANGE',desc:'Goods item identification numbers, start and end of consecutively numbered range.',repeat:1,length:'',type:'',level:5,children:[
					{id:2615340,label:'7402',mandatory:'M',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:6,children:[]},
					{id:2615341,label:'7402',mandatory:'C',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:6,children:[]}]},
				{id:261535,label:'C208',mandatory:'C',shortDesc:'IDENTITY NUMBER RANGE',desc:'Goods item identification numbers, start and end of consecutively numbered range.',repeat:1,length:'',type:'',level:5,children:[
					{id:2615350,label:'7402',mandatory:'M',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:6,children:[]},
					{id:2615351,label:'7402',mandatory:'C',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:6,children:[]}]}]}]}]},
	{id:262,label:'GRP38',mandatory:'C',shortDesc:'LOC#PCD#DTM#GRP39#',desc:'A group of segments specifying destination and quantity details for consignments involving multi-destination deliveries.',repeat:9999,length:'',type:'',level:2,children:[
		{id:2620,label:'LOC',mandatory:'M',shortDesc:'PLACE/LOCATION IDENTIFICATION',desc:'A segment indicating the location to which part of the consignment is to be delivered.',repeat:1,length:'',type:'',level:3,children:[
			{id:26200,label:'3227',mandatory:'M',shortDesc:'LOCATION FUNCTION CODE QUALIFIER',desc:'Code identifying the function of a location.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:26201,label:'C517',mandatory:'C',shortDesc:'LOCATION IDENTIFICATION',desc:'Identification of a location by code or name.',repeat:1,length:'',type:'',level:4,children:[
				{id:262010,label:'3225',mandatory:'C',shortDesc:'Location identifier',desc:'To identify a location.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:262011,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:262012,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:262013,label:'3224',mandatory:'C',shortDesc:'Location name',desc:'Name of the location.',repeat:1,length:'0..256',type:'an',level:5,children:[]}]},
			{id:26202,label:'C519',mandatory:'C',shortDesc:'RELATED LOCATION ONE IDENTIFICATION',desc:'Identification the first related location by code or name.',repeat:1,length:'',type:'',level:4,children:[
				{id:262020,label:'3223',mandatory:'C',shortDesc:'First related location identifier',desc:'To identify a first related location.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:262021,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:262022,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:262023,label:'3222',mandatory:'C',shortDesc:'First related location name',desc:'Name of first related location.',repeat:1,length:'0..70',type:'an',level:5,children:[]}]},
			{id:26203,label:'C553',mandatory:'C',shortDesc:'RELATED LOCATION TWO IDENTIFICATION',desc:'Identification of second related location by code or name.',repeat:1,length:'',type:'',level:4,children:[
				{id:262030,label:'3233',mandatory:'C',shortDesc:'Second related location identifier',desc:'To identify a second related location.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:262031,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:262032,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:262033,label:'3232',mandatory:'C',shortDesc:'Second related location name',desc:'Name of the second related location.',repeat:1,length:'0..70',type:'an',level:5,children:[]}]},
			{id:26204,label:'5479',mandatory:'C',shortDesc:'RELATION CODE',desc:'Code specifying a relation.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:2621,label:'PCD',mandatory:'C',shortDesc:'PERCENTAGE DETAILS',desc:'A segment specifying the percentage of the quantity to be delivered to the identified location.',repeat:1,length:'',type:'',level:3,children:[
			{id:26210,label:'C501',mandatory:'M',shortDesc:'PERCENTAGE DETAILS',desc:'Percentage relating to a specified basis.',repeat:1,length:'',type:'',level:4,children:[
				{id:262100,label:'5245',mandatory:'M',shortDesc:'Percentage type code qualifier',desc:'Code qualifying the type of percentage.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:262101,label:'5482',mandatory:'C',shortDesc:'Percentage',desc:'To specify a percentage.',repeat:1,length:'0..10',type:'n',level:5,children:[]},
				{id:262102,label:'5249',mandatory:'C',shortDesc:'Percentage basis identification code',desc:'Code specifying the basis on which a percentage is calculated.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:262103,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:262104,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]},
			{id:26211,label:'4405',mandatory:'C',shortDesc:'STATUS DESCRIPTION CODE',desc:'Code specifying a status.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:2622,label:'DTM',mandatory:'C',shortDesc:'DATE/TIME/PERIOD',desc:'A segment specifying the dates and/or times that the delivery should be made.',repeat:5,length:'',type:'',level:3,children:[
			{id:26220,label:'C507',mandatory:'M',shortDesc:'DATE/TIME/PERIOD',desc:'Date and/or time, or period relevant to the specified date/time/period type.',repeat:1,length:'',type:'',level:4,children:[
				{id:262200,label:'2005',mandatory:'M',shortDesc:'Date or time or period function code qualifier',desc:'Code qualifying the function of a date, time or period.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:262201,label:'2380',mandatory:'C',shortDesc:'Date or time or period text',desc:'The value of a date, a date and time, a time or of a period in a specified representation.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:262202,label:'2379',mandatory:'C',shortDesc:'Date or time or period format code',desc:'Code specifying the representation of a date, time or period.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]}]},
		{id:2623,label:'GRP39',mandatory:'C',shortDesc:'QTY#STS#',desc:'A group of segments specifying quantity details and related status information of consignments involving multi destination deliveries.',repeat:99,length:'',type:'',level:3,children:[
			{id:26230,label:'QTY',mandatory:'M',shortDesc:'QUANTITY',desc:'A segment specifying the quantity to be delivered to the identified location.',repeat:1,length:'',type:'',level:4,children:[
				{id:262300,label:'C186',mandatory:'M',shortDesc:'QUANTITY DETAILS',desc:'Quantity information in a transaction, qualified when relevant.',repeat:1,length:'',type:'',level:5,children:[
					{id:2623000,label:'6063',mandatory:'M',shortDesc:'Quantity type code qualifier',desc:'Code qualifying the type of quantity.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2623001,label:'6060',mandatory:'M',shortDesc:'Quantity',desc:'Alphanumeric representation of a quantity.',repeat:1,length:'0..35',type:'an',level:6,children:[]},
					{id:2623002,label:'6411',mandatory:'C',shortDesc:'Measurement unit code',desc:'Code specifying the unit of measurement.',repeat:1,length:'0..8',type:'an',level:6,children:[]}]}]},
			{id:26231,label:'STS',mandatory:'C',shortDesc:'STATUS',desc:'A segment specifying the status of the quantity, including its category and the reason(s) for the status.',repeat:99,length:'',type:'',level:4,children:[
				{id:262310,label:'C601',mandatory:'C',shortDesc:'STATUS CATEGORY',desc:'To specify the category of the status.',repeat:1,length:'',type:'',level:5,children:[
					{id:2623100,label:'9015',mandatory:'M',shortDesc:'Status category code',desc:'Code specifying the category of a status.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2623101,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:6,children:[]},
					{id:2623102,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:6,children:[]}]},
				{id:262311,label:'C555',mandatory:'C',shortDesc:'STATUS',desc:'To specify a status.',repeat:1,length:'',type:'',level:5,children:[
					{id:2623110,label:'4405',mandatory:'M',shortDesc:'Status description code',desc:'Code specifying a status.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2623111,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:6,children:[]},
					{id:2623112,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2623113,label:'4404',mandatory:'C',shortDesc:'Status description',desc:'Free form description of a status.',repeat:1,length:'0..35',type:'an',level:6,children:[]}]},
				{id:262312,label:'C556',mandatory:'C',shortDesc:'STATUS REASON',desc:'To specify the reason for a status.',repeat:1,length:'',type:'',level:5,children:[
					{id:2623120,label:'9013',mandatory:'M',shortDesc:'Status reason description code',desc:'Code specifying the reason for a status.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2623121,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:6,children:[]},
					{id:2623122,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2623123,label:'9012',mandatory:'C',shortDesc:'Status reason description',desc:'Free form description of the status reason.',repeat:1,length:'0..256',type:'an',level:6,children:[]}]},
				{id:262313,label:'C556',mandatory:'C',shortDesc:'STATUS REASON',desc:'To specify the reason for a status.',repeat:1,length:'',type:'',level:5,children:[
					{id:2623130,label:'9013',mandatory:'M',shortDesc:'Status reason description code',desc:'Code specifying the reason for a status.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2623131,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:6,children:[]},
					{id:2623132,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2623133,label:'9012',mandatory:'C',shortDesc:'Status reason description',desc:'Free form description of the status reason.',repeat:1,length:'0..256',type:'an',level:6,children:[]}]},
				{id:262314,label:'C556',mandatory:'C',shortDesc:'STATUS REASON',desc:'To specify the reason for a status.',repeat:1,length:'',type:'',level:5,children:[
					{id:2623140,label:'9013',mandatory:'M',shortDesc:'Status reason description code',desc:'Code specifying the reason for a status.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2623141,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:6,children:[]},
					{id:2623142,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2623143,label:'9012',mandatory:'C',shortDesc:'Status reason description',desc:'Free form description of the status reason.',repeat:1,length:'0..256',type:'an',level:6,children:[]}]},
				{id:262315,label:'C556',mandatory:'C',shortDesc:'STATUS REASON',desc:'To specify the reason for a status.',repeat:1,length:'',type:'',level:5,children:[
					{id:2623150,label:'9013',mandatory:'M',shortDesc:'Status reason description code',desc:'Code specifying the reason for a status.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2623151,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:6,children:[]},
					{id:2623152,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2623153,label:'9012',mandatory:'C',shortDesc:'Status reason description',desc:'Free form description of the status reason.',repeat:1,length:'0..256',type:'an',level:6,children:[]}]},
				{id:262316,label:'C556',mandatory:'C',shortDesc:'STATUS REASON',desc:'To specify the reason for a status.',repeat:1,length:'',type:'',level:5,children:[
					{id:2623160,label:'9013',mandatory:'M',shortDesc:'Status reason description code',desc:'Code specifying the reason for a status.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2623161,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:6,children:[]},
					{id:2623162,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2623163,label:'9012',mandatory:'C',shortDesc:'Status reason description',desc:'Free form description of the status reason.',repeat:1,length:'0..256',type:'an',level:6,children:[]}]}]}]}]},
	{id:263,label:'GRP40',mandatory:'C',shortDesc:'TAX#MOA#LOC#',desc:'A group of segments specifying tax related information, and when necessary, the location(s) to which that tax information relates.',repeat:10,length:'',type:'',level:2,children:[
		{id:2630,label:'TAX',mandatory:'M',shortDesc:'DUTY/TAX/FEE DETAILS',desc:'A segment specifying a tax type, category and rate, or exemption, relating to the line item.',repeat:1,length:'',type:'',level:3,children:[
			{id:26300,label:'5283',mandatory:'M',shortDesc:'DUTY OR TAX OR FEE FUNCTION CODE QUALIFIER',desc:'Code qualifying the function of a duty or tax or fee.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:26301,label:'C241',mandatory:'C',shortDesc:'DUTY/TAX/FEE TYPE',desc:'Code and/or name identifying duty, tax or fee.',repeat:1,length:'',type:'',level:4,children:[
				{id:263010,label:'5153',mandatory:'C',shortDesc:'Duty or tax or fee type name code',desc:'Code specifying a type of duty, tax or fee.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:263011,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:263012,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:263013,label:'5152',mandatory:'C',shortDesc:'Duty or tax or fee type name',desc:'Name of a type of duty, tax or fee.',repeat:1,length:'0..35',type:'an',level:5,children:[]}]},
			{id:26302,label:'C533',mandatory:'C',shortDesc:'DUTY/TAX/FEE ACCOUNT DETAIL',desc:'Indication of account reference for duties, taxes and/or fees.',repeat:1,length:'',type:'',level:4,children:[
				{id:263020,label:'5289',mandatory:'M',shortDesc:'Duty or tax or fee account code',desc:'Code specifying a duty or tax or fee account.',repeat:1,length:'0..6',type:'an',level:5,children:[]},
				{id:263021,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:263022,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]},
			{id:26303,label:'5286',mandatory:'C',shortDesc:'DUTY OR TAX OR FEE ASSESSMENT BASIS QUANTITY',desc:'To specify the basis on which a duty or tax or fee will be assessed.',repeat:1,length:'0..15',type:'an',level:4,children:[]},
			{id:26304,label:'C243',mandatory:'C',shortDesc:'DUTY/TAX/FEE DETAIL',desc:'Rate of duty/tax/fee applicable to commodities or of tax applicable to services.',repeat:1,length:'',type:'',level:4,children:[
				{id:263040,label:'5279',mandatory:'C',shortDesc:'Duty or tax or fee rate code',desc:'Code specifying a rate of a duty or tax or fee.',repeat:1,length:'0..7',type:'an',level:5,children:[]},
				{id:263041,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:263042,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:263043,label:'5278',mandatory:'C',shortDesc:'Duty or tax or fee rate',desc:'Rate of a duty or tax or fee.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:263044,label:'5273',mandatory:'C',shortDesc:'Duty or tax or fee rate basis code',desc:'Code specifying the basis for a duty or tax or fee rate.',repeat:1,length:'0..12',type:'an',level:5,children:[]},
				{id:263045,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:263046,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]},
			{id:26305,label:'5305',mandatory:'C',shortDesc:'DUTY OR TAX OR FEE CATEGORY CODE',desc:'Code specifying a duty or tax or fee category.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:26306,label:'3446',mandatory:'C',shortDesc:'PARTY TAX IDENTIFIER',desc:'To identify a number assigned to a party by a tax authority.',repeat:1,length:'0..20',type:'an',level:4,children:[]},
			{id:26307,label:'1227',mandatory:'C',shortDesc:'CALCULATION SEQUENCE CODE',desc:'Code specifying a calculation sequence.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:26308,label:'5307',mandatory:'C',shortDesc:'TAX OR DUTY OR FEE PAYMENT DUE DATE CODE',desc:'A code indicating when the duty, tax, or fee payment will be due.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:2631,label:'MOA',mandatory:'C',shortDesc:'MONETARY AMOUNT',desc:'A segment specifying the amount for the identified tax/fee.',repeat:1,length:'',type:'',level:3,children:[
			{id:26310,label:'C516',mandatory:'M',shortDesc:'MONETARY AMOUNT',desc:'Amount of goods or services stated as a monetary amount in a specified currency.',repeat:1,length:'',type:'',level:4,children:[
				{id:263100,label:'5025',mandatory:'M',shortDesc:'Monetary amount type code qualifier',desc:'Code qualifying the type of monetary amount.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:263101,label:'5004',mandatory:'C',shortDesc:'Monetary amount',desc:'To specify a monetary amount.',repeat:1,length:'0..35',type:'n',level:5,children:[]},
				{id:263102,label:'6345',mandatory:'C',shortDesc:'Currency identification code',desc:'Code specifying a monetary unit.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:263103,label:'6343',mandatory:'C',shortDesc:'Currency type code qualifier',desc:'Code qualifying the type of currency.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:263104,label:'4405',mandatory:'C',shortDesc:'Status description code',desc:'Code specifying a status.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]}]},
		{id:2632,label:'LOC',mandatory:'C',shortDesc:'PLACE/LOCATION IDENTIFICATION',desc:'A segment indicating the location to which the tax or exemption specified in the TAX segment applies e.g. city or state tax.',repeat:5,length:'',type:'',level:3,children:[
			{id:26320,label:'3227',mandatory:'M',shortDesc:'LOCATION FUNCTION CODE QUALIFIER',desc:'Code identifying the function of a location.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:26321,label:'C517',mandatory:'C',shortDesc:'LOCATION IDENTIFICATION',desc:'Identification of a location by code or name.',repeat:1,length:'',type:'',level:4,children:[
				{id:263210,label:'3225',mandatory:'C',shortDesc:'Location identifier',desc:'To identify a location.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:263211,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:263212,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:263213,label:'3224',mandatory:'C',shortDesc:'Location name',desc:'Name of the location.',repeat:1,length:'0..256',type:'an',level:5,children:[]}]},
			{id:26322,label:'C519',mandatory:'C',shortDesc:'RELATED LOCATION ONE IDENTIFICATION',desc:'Identification the first related location by code or name.',repeat:1,length:'',type:'',level:4,children:[
				{id:263220,label:'3223',mandatory:'C',shortDesc:'First related location identifier',desc:'To identify a first related location.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:263221,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:263222,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:263223,label:'3222',mandatory:'C',shortDesc:'First related location name',desc:'Name of first related location.',repeat:1,length:'0..70',type:'an',level:5,children:[]}]},
			{id:26323,label:'C553',mandatory:'C',shortDesc:'RELATED LOCATION TWO IDENTIFICATION',desc:'Identification of second related location by code or name.',repeat:1,length:'',type:'',level:4,children:[
				{id:263230,label:'3233',mandatory:'C',shortDesc:'Second related location identifier',desc:'To identify a second related location.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:263231,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:263232,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:263233,label:'3232',mandatory:'C',shortDesc:'Second related location name',desc:'Name of the second related location.',repeat:1,length:'0..70',type:'an',level:5,children:[]}]},
			{id:26324,label:'5479',mandatory:'C',shortDesc:'RELATION CODE',desc:'Code specifying a relation.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]}]},
	{id:264,label:'GRP41',mandatory:'C',shortDesc:'NAD#LOC#FII#GRP42#GRP43#GRP44#',desc:'A group of segments identifying the parties with associated information, relevant to the line item only.',repeat:999,length:'',type:'',level:2,children:[
		{id:2640,label:'NAD',mandatory:'M',shortDesc:'NAME AND ADDRESS',desc:'A segment identifying names and addresses of the parties, in coded or clear form, and their functions relevant to the line item . It is recommended that where possible only the coded form of the party ID should be specified. e.g. The Buyer and Seller are known to each other, thus only the coded ID is required, but the Consignee or Delivery address may vary and would have to be clearly specified, preferably in structured format.',repeat:1,length:'',type:'',level:3,children:[
			{id:26400,label:'3035',mandatory:'M',shortDesc:'PARTY FUNCTION CODE QUALIFIER',desc:'Code giving specific meaning to a party.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:26401,label:'C082',mandatory:'C',shortDesc:'PARTY IDENTIFICATION DETAILS',desc:'Identification of a transaction party by code.',repeat:1,length:'',type:'',level:4,children:[
				{id:264010,label:'3039',mandatory:'M',shortDesc:'Party identifier',desc:'Code specifying the identity of a party.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:264011,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:264012,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]},
			{id:26402,label:'C058',mandatory:'C',shortDesc:'NAME AND ADDRESS',desc:'Unstructured name and address: one to five lines.',repeat:1,length:'',type:'',level:4,children:[
				{id:264020,label:'3124',mandatory:'M',shortDesc:'Name and address description',desc:'Free form description of a name and address line.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:264021,label:'3124',mandatory:'C',shortDesc:'Name and address description',desc:'Free form description of a name and address line.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:264022,label:'3124',mandatory:'C',shortDesc:'Name and address description',desc:'Free form description of a name and address line.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:264023,label:'3124',mandatory:'C',shortDesc:'Name and address description',desc:'Free form description of a name and address line.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:264024,label:'3124',mandatory:'C',shortDesc:'Name and address description',desc:'Free form description of a name and address line.',repeat:1,length:'0..35',type:'an',level:5,children:[]}]},
			{id:26403,label:'C080',mandatory:'C',shortDesc:'PARTY NAME',desc:'Identification of a transaction party by name, one to five lines. Party name may be formatted.',repeat:1,length:'',type:'',level:4,children:[
				{id:264030,label:'3036',mandatory:'M',shortDesc:'Party name',desc:'Name of a party.',repeat:1,length:'0..70',type:'an',level:5,children:[]},
				{id:264031,label:'3036',mandatory:'C',shortDesc:'Party name',desc:'Name of a party.',repeat:1,length:'0..70',type:'an',level:5,children:[]},
				{id:264032,label:'3036',mandatory:'C',shortDesc:'Party name',desc:'Name of a party.',repeat:1,length:'0..70',type:'an',level:5,children:[]},
				{id:264033,label:'3036',mandatory:'C',shortDesc:'Party name',desc:'Name of a party.',repeat:1,length:'0..70',type:'an',level:5,children:[]},
				{id:264034,label:'3036',mandatory:'C',shortDesc:'Party name',desc:'Name of a party.',repeat:1,length:'0..70',type:'an',level:5,children:[]},
				{id:264035,label:'3045',mandatory:'C',shortDesc:'Party name format code',desc:'Code specifying the representation of a party name.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]},
			{id:26404,label:'C059',mandatory:'C',shortDesc:'STREET',desc:'Street address and/or PO Box number in a structured address: one to four lines.',repeat:1,length:'',type:'',level:4,children:[
				{id:264040,label:'3042',mandatory:'M',shortDesc:'Street and number or post office box identifier',desc:'To identify a street and number and/or Post Office box number.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:264041,label:'3042',mandatory:'C',shortDesc:'Street and number or post office box identifier',desc:'To identify a street and number and/or Post Office box number.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:264042,label:'3042',mandatory:'C',shortDesc:'Street and number or post office box identifier',desc:'To identify a street and number and/or Post Office box number.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:264043,label:'3042',mandatory:'C',shortDesc:'Street and number or post office box identifier',desc:'To identify a street and number and/or Post Office box number.',repeat:1,length:'0..35',type:'an',level:5,children:[]}]},
			{id:26405,label:'3164',mandatory:'C',shortDesc:'CITY NAME',desc:'Name of a city.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:26406,label:'C819',mandatory:'C',shortDesc:'COUNTRY SUBDIVISION DETAILS',desc:'To specify a country subdivision, such as state, canton, county, prefecture.',repeat:1,length:'',type:'',level:4,children:[
				{id:264060,label:'3229',mandatory:'C',shortDesc:'Country subdivision identifier',desc:'To identify a country subdivision, such as state, canton, county, prefecture.',repeat:1,length:'0..9',type:'an',level:5,children:[]},
				{id:264061,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:264062,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:264063,label:'3228',mandatory:'C',shortDesc:'Country subdivision name',desc:'Name of a country subdivision, such as state, canton, county, prefecture.',repeat:1,length:'0..70',type:'an',level:5,children:[]}]},
			{id:26407,label:'3251',mandatory:'C',shortDesc:'POSTAL IDENTIFICATION CODE',desc:'Code specifying the postal zone or address.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:26408,label:'3207',mandatory:'C',shortDesc:'COUNTRY IDENTIFIER',desc:'Identification of the name of the country or other geographical entity as defined in ISO 3166-1 and UN/ECE Recommendation 3.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:2641,label:'LOC',mandatory:'C',shortDesc:'PLACE/LOCATION IDENTIFICATION',desc:'A segment giving more specific location information of the party specified in the NAD segment e.g. internal site/building number.',repeat:5,length:'',type:'',level:3,children:[
			{id:26410,label:'3227',mandatory:'M',shortDesc:'LOCATION FUNCTION CODE QUALIFIER',desc:'Code identifying the function of a location.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:26411,label:'C517',mandatory:'C',shortDesc:'LOCATION IDENTIFICATION',desc:'Identification of a location by code or name.',repeat:1,length:'',type:'',level:4,children:[
				{id:264110,label:'3225',mandatory:'C',shortDesc:'Location identifier',desc:'To identify a location.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:264111,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:264112,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:264113,label:'3224',mandatory:'C',shortDesc:'Location name',desc:'Name of the location.',repeat:1,length:'0..256',type:'an',level:5,children:[]}]},
			{id:26412,label:'C519',mandatory:'C',shortDesc:'RELATED LOCATION ONE IDENTIFICATION',desc:'Identification the first related location by code or name.',repeat:1,length:'',type:'',level:4,children:[
				{id:264120,label:'3223',mandatory:'C',shortDesc:'First related location identifier',desc:'To identify a first related location.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:264121,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:264122,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:264123,label:'3222',mandatory:'C',shortDesc:'First related location name',desc:'Name of first related location.',repeat:1,length:'0..70',type:'an',level:5,children:[]}]},
			{id:26413,label:'C553',mandatory:'C',shortDesc:'RELATED LOCATION TWO IDENTIFICATION',desc:'Identification of second related location by code or name.',repeat:1,length:'',type:'',level:4,children:[
				{id:264130,label:'3233',mandatory:'C',shortDesc:'Second related location identifier',desc:'To identify a second related location.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:264131,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:264132,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:264133,label:'3232',mandatory:'C',shortDesc:'Second related location name',desc:'Name of the second related location.',repeat:1,length:'0..70',type:'an',level:5,children:[]}]},
			{id:26414,label:'5479',mandatory:'C',shortDesc:'RELATION CODE',desc:'Code specifying a relation.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:2642,label:'FII',mandatory:'C',shortDesc:'FINANCIAL INSTITUTION INFORMATION',desc:'A segment identifying the financial institution (e.g. bank) and relevant account numbers for the seller, buyer and where necessary other parties e.g. the buyer may provide a choice of financial institutions for direct debit purposes.',repeat:5,length:'',type:'',level:3,children:[
			{id:26420,label:'3035',mandatory:'M',shortDesc:'PARTY FUNCTION CODE QUALIFIER',desc:'Code giving specific meaning to a party.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:26421,label:'C078',mandatory:'C',shortDesc:'ACCOUNT HOLDER IDENTIFICATION',desc:'Identification of an account holder by account number and/or account holder name in one or two lines. Number preferred.',repeat:1,length:'',type:'',level:4,children:[
				{id:264210,label:'3194',mandatory:'C',shortDesc:'Account holder identifier',desc:'To identify the holder of an account.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:264211,label:'3192',mandatory:'C',shortDesc:'Account holder name',desc:'Name of the holder of an account.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:264212,label:'3192',mandatory:'C',shortDesc:'Account holder name',desc:'Name of the holder of an account.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:264213,label:'6345',mandatory:'C',shortDesc:'Currency identification code',desc:'Code specifying a monetary unit.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]},
			{id:26422,label:'C088',mandatory:'C',shortDesc:'INSTITUTION IDENTIFICATION',desc:'Identification of a financial institution by code branch number, or name and name of place. Code or branch number preferred.',repeat:1,length:'',type:'',level:4,children:[
				{id:264220,label:'3433',mandatory:'C',shortDesc:'Institution name code',desc:'Code specifying the name of an institution.',repeat:1,length:'0..11',type:'an',level:5,children:[]},
				{id:264221,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:264222,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:264223,label:'3434',mandatory:'C',shortDesc:'Institution branch identifier',desc:'To identify a branch of an institution.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:264224,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:264225,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:264226,label:'3432',mandatory:'C',shortDesc:'Institution name',desc:'Name of an institution.',repeat:1,length:'0..70',type:'an',level:5,children:[]},
				{id:264227,label:'3436',mandatory:'C',shortDesc:'Institution branch location name',desc:'Name of the location of a branch of an institution.',repeat:1,length:'0..70',type:'an',level:5,children:[]}]},
			{id:26423,label:'3207',mandatory:'C',shortDesc:'COUNTRY IDENTIFIER',desc:'Identification of the name of the country or other geographical entity as defined in ISO 3166-1 and UN/ECE Recommendation 3.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:2643,label:'GRP42',mandatory:'C',shortDesc:'RFF#DTM#',desc:'A group of segments giving references only relevant to the specified party rather than the line item.',repeat:99,length:'',type:'',level:3,children:[
			{id:26430,label:'RFF',mandatory:'M',shortDesc:'REFERENCE',desc:'A segment identifying the reference by its number and where appropriate a line number within a document.',repeat:1,length:'',type:'',level:4,children:[
				{id:264300,label:'C506',mandatory:'M',shortDesc:'REFERENCE',desc:'Identification of a reference.',repeat:1,length:'',type:'',level:5,children:[
					{id:2643000,label:'1153',mandatory:'M',shortDesc:'Reference code qualifier',desc:'Code qualifying a reference.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2643001,label:'1154',mandatory:'C',shortDesc:'Reference identifier',desc:'Identifies a reference.',repeat:1,length:'0..70',type:'an',level:6,children:[]},
					{id:2643002,label:'1156',mandatory:'C',shortDesc:'Document line identifier',desc:'To identify a line of a document.',repeat:1,length:'0..6',type:'an',level:6,children:[]},
					{id:2643003,label:'1056',mandatory:'C',shortDesc:'Version identifier',desc:'To identify a version.',repeat:1,length:'0..9',type:'an',level:6,children:[]},
					{id:2643004,label:'1060',mandatory:'C',shortDesc:'Revision identifier',desc:'To identify a revision.',repeat:1,length:'0..6',type:'an',level:6,children:[]}]}]},
			{id:26431,label:'DTM',mandatory:'C',shortDesc:'DATE/TIME/PERIOD',desc:'A segment specifying the date and/or time related to the reference.',repeat:5,length:'',type:'',level:4,children:[
				{id:264310,label:'C507',mandatory:'M',shortDesc:'DATE/TIME/PERIOD',desc:'Date and/or time, or period relevant to the specified date/time/period type.',repeat:1,length:'',type:'',level:5,children:[
					{id:2643100,label:'2005',mandatory:'M',shortDesc:'Date or time or period function code qualifier',desc:'Code qualifying the function of a date, time or period.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2643101,label:'2380',mandatory:'C',shortDesc:'Date or time or period text',desc:'The value of a date, a date and time, a time or of a period in a specified representation.',repeat:1,length:'0..35',type:'an',level:6,children:[]},
					{id:2643102,label:'2379',mandatory:'C',shortDesc:'Date or time or period format code',desc:'Code specifying the representation of a date, time or period.',repeat:1,length:'0..3',type:'an',level:6,children:[]}]}]}]},
		{id:2644,label:'GRP43',mandatory:'C',shortDesc:'DOC#DTM#',desc:'A group of segments identifying the documentary requirements of the specified party.',repeat:5,length:'',type:'',level:3,children:[
			{id:26440,label:'DOC',mandatory:'M',shortDesc:'DOCUMENT/MESSAGE DETAILS',desc:'A segment identifying and providing information relating to the documents required by the party specified by the NAD segment. For example, the party may require a Certificate of Analysis.',repeat:1,length:'',type:'',level:4,children:[
				{id:264400,label:'C002',mandatory:'M',shortDesc:'DOCUMENT/MESSAGE NAME',desc:'Identification of a type of document/message by code or name. Code preferred.',repeat:1,length:'',type:'',level:5,children:[
					{id:2644000,label:'1001',mandatory:'C',shortDesc:'Document name code',desc:'Code specifying the document name.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2644001,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:6,children:[]},
					{id:2644002,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2644003,label:'1000',mandatory:'C',shortDesc:'Document name',desc:'Name of a document.',repeat:1,length:'0..35',type:'an',level:6,children:[]}]},
				{id:264401,label:'C503',mandatory:'C',shortDesc:'DOCUMENT/MESSAGE DETAILS',desc:'Identification of document/message by number, status, source and/or language.',repeat:1,length:'',type:'',level:5,children:[
					{id:2644010,label:'1004',mandatory:'C',shortDesc:'Document identifier',desc:'To identify a document.',repeat:1,length:'0..70',type:'an',level:6,children:[]},
					{id:2644011,label:'1373',mandatory:'C',shortDesc:'Document status code',desc:'Code specifying the status of a document.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2644012,label:'1366',mandatory:'C',shortDesc:'Document source description',desc:'Free form description of the source of a document.',repeat:1,length:'0..70',type:'an',level:6,children:[]},
					{id:2644013,label:'3453',mandatory:'C',shortDesc:'Language name code',desc:'Code specifying the language name.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2644014,label:'1056',mandatory:'C',shortDesc:'Version identifier',desc:'To identify a version.',repeat:1,length:'0..9',type:'an',level:6,children:[]},
					{id:2644015,label:'1060',mandatory:'C',shortDesc:'Revision identifier',desc:'To identify a revision.',repeat:1,length:'0..6',type:'an',level:6,children:[]}]},
				{id:264402,label:'3153',mandatory:'C',shortDesc:'COMMUNICATION MEDIUM TYPE CODE',desc:'Code specifying the type of communication medium.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:264403,label:'1220',mandatory:'C',shortDesc:'DOCUMENT COPIES REQUIRED QUANTITY',desc:'Quantity of document copies required.',repeat:1,length:'0..2',type:'n',level:5,children:[]},
				{id:264404,label:'1218',mandatory:'C',shortDesc:'DOCUMENT ORIGINALS REQUIRED QUANTITY',desc:'Quantity of document originals required.',repeat:1,length:'0..2',type:'n',level:5,children:[]}]},
			{id:26441,label:'DTM',mandatory:'C',shortDesc:'DATE/TIME/PERIOD',desc:'A segment specifying the date and/or time of the document.',repeat:5,length:'',type:'',level:4,children:[
				{id:264410,label:'C507',mandatory:'M',shortDesc:'DATE/TIME/PERIOD',desc:'Date and/or time, or period relevant to the specified date/time/period type.',repeat:1,length:'',type:'',level:5,children:[
					{id:2644100,label:'2005',mandatory:'M',shortDesc:'Date or time or period function code qualifier',desc:'Code qualifying the function of a date, time or period.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2644101,label:'2380',mandatory:'C',shortDesc:'Date or time or period text',desc:'The value of a date, a date and time, a time or of a period in a specified representation.',repeat:1,length:'0..35',type:'an',level:6,children:[]},
					{id:2644102,label:'2379',mandatory:'C',shortDesc:'Date or time or period format code',desc:'Code specifying the representation of a date, time or period.',repeat:1,length:'0..3',type:'an',level:6,children:[]}]}]}]},
		{id:2645,label:'GRP44',mandatory:'C',shortDesc:'CTA#COM#',desc:'A group of segments giving contact details of the specific person or department within the party identified in the NAD segment.',repeat:5,length:'',type:'',level:3,children:[
			{id:26450,label:'CTA',mandatory:'M',shortDesc:'CONTACT INFORMATION',desc:'A segment to identify a person or department, and their function, to whom communications should be directed.',repeat:1,length:'',type:'',level:4,children:[
				{id:264500,label:'3139',mandatory:'C',shortDesc:'CONTACT FUNCTION CODE',desc:'Code specifying the function of a contact (e.g. department or person).',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:264501,label:'C056',mandatory:'C',shortDesc:'CONTACT DETAILS',desc:'Code and/or name of a contact such as a department or employee. Code preferred.',repeat:1,length:'',type:'',level:5,children:[
					{id:2645010,label:'3413',mandatory:'C',shortDesc:'Contact identifier',desc:'To identify a contact, such as a department or employee.',repeat:1,length:'0..17',type:'an',level:6,children:[]},
					{id:2645011,label:'3412',mandatory:'C',shortDesc:'Contact name',desc:'Name of a contact, such as a department or employee.',repeat:1,length:'0..256',type:'an',level:6,children:[]}]}]},
			{id:26451,label:'COM',mandatory:'C',shortDesc:'COMMUNICATION CONTACT',desc:'A segment to identify a communications type and number for the contact specified in the CTA segment.',repeat:5,length:'',type:'',level:4,children:[
				{id:264510,label:'C076',mandatory:'M',shortDesc:'COMMUNICATION CONTACT',desc:'Communication number of a department or employee in a specified channel.',repeat:1,length:'',type:'',level:5,children:[
					{id:2645100,label:'3148',mandatory:'M',shortDesc:'Communication address identifier',desc:'To identify a communication address.',repeat:1,length:'0..512',type:'an',level:6,children:[]},
					{id:2645101,label:'3155',mandatory:'M',shortDesc:'Communication means type code',desc:'Code specifying the type of communication address.',repeat:1,length:'0..3',type:'an',level:6,children:[]}]}]}]}]},
	{id:265,label:'GRP45',mandatory:'C',shortDesc:'ALC#ALI#DTM#GRP46#GRP47#GRP48#GRP49#GRP50#',desc:'A group of segments specifying allowances and charges for the line item where this is different to or not specified within the heading section.',repeat:99,length:'',type:'',level:2,children:[
		{id:2650,label:'ALC',mandatory:'M',shortDesc:'ALLOWANCE OR CHARGE',desc:'A segment identifying the charge or allowance and, where necessary its calculation sequence.',repeat:1,length:'',type:'',level:3,children:[
			{id:26500,label:'5463',mandatory:'M',shortDesc:'ALLOWANCE OR CHARGE CODE QUALIFIER',desc:'Code qualifying an allowance or charge.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:26501,label:'C552',mandatory:'C',shortDesc:'ALLOWANCE/CHARGE INFORMATION',desc:'Identification of allowance/charge information by number and/or code.',repeat:1,length:'',type:'',level:4,children:[
				{id:265010,label:'1230',mandatory:'C',shortDesc:'Allowance or charge identifier',desc:'To identify an allowance or charge.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:265011,label:'5189',mandatory:'C',shortDesc:'Allowance or charge identification code',desc:'Code specifying the identification of an allowance or charge.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]},
			{id:26502,label:'4471',mandatory:'C',shortDesc:'SETTLEMENT MEANS CODE',desc:'Code specifying the means of settlement.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:26503,label:'1227',mandatory:'C',shortDesc:'CALCULATION SEQUENCE CODE',desc:'Code specifying a calculation sequence.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:26504,label:'C214',mandatory:'C',shortDesc:'SPECIAL SERVICES IDENTIFICATION',desc:'Identification of a special service by a code from a specified source or by description.',repeat:1,length:'',type:'',level:4,children:[
				{id:265040,label:'7161',mandatory:'C',shortDesc:'Special service description code',desc:'Code specifying a special service.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:265041,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:265042,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:265043,label:'7160',mandatory:'C',shortDesc:'Special service description',desc:'Free form description of a special service.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:265044,label:'7160',mandatory:'C',shortDesc:'Special service description',desc:'Free form description of a special service.',repeat:1,length:'0..35',type:'an',level:5,children:[]}]}]},
		{id:2651,label:'ALI',mandatory:'C',shortDesc:'ADDITIONAL INFORMATION',desc:'A segment indicating that the allowance or charge specified is subject to special conditions owing to origin, customs preference or commercial factors.',repeat:5,length:'',type:'',level:3,children:[
			{id:26510,label:'3239',mandatory:'C',shortDesc:'COUNTRY OF ORIGIN IDENTIFIER',desc:'To identify the country in which the goods have been produced or manufactured, according to criteria laid down for the application of the Customs tariff or quantitative restrictions, or any measure related to trade.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:26511,label:'9213',mandatory:'C',shortDesc:'DUTY REGIME TYPE CODE',desc:'Code specifying a type of duty regime.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:26512,label:'4183',mandatory:'C',shortDesc:'SPECIAL CONDITION CODE',desc:'Code specifying a special condition.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:26513,label:'4183',mandatory:'C',shortDesc:'SPECIAL CONDITION CODE',desc:'Code specifying a special condition.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:26514,label:'4183',mandatory:'C',shortDesc:'SPECIAL CONDITION CODE',desc:'Code specifying a special condition.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:26515,label:'4183',mandatory:'C',shortDesc:'SPECIAL CONDITION CODE',desc:'Code specifying a special condition.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:26516,label:'4183',mandatory:'C',shortDesc:'SPECIAL CONDITION CODE',desc:'Code specifying a special condition.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:2652,label:'DTM',mandatory:'C',shortDesc:'DATE/TIME/PERIOD',desc:'A segment to identify the date/time/period information related to the allowance or charge, e.g. period of validity.',repeat:5,length:'',type:'',level:3,children:[
			{id:26520,label:'C507',mandatory:'M',shortDesc:'DATE/TIME/PERIOD',desc:'Date and/or time, or period relevant to the specified date/time/period type.',repeat:1,length:'',type:'',level:4,children:[
				{id:265200,label:'2005',mandatory:'M',shortDesc:'Date or time or period function code qualifier',desc:'Code qualifying the function of a date, time or period.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:265201,label:'2380',mandatory:'C',shortDesc:'Date or time or period text',desc:'The value of a date, a date and time, a time or of a period in a specified representation.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:265202,label:'2379',mandatory:'C',shortDesc:'Date or time or period format code',desc:'Code specifying the representation of a date, time or period.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]}]},
		{id:2653,label:'GRP46',mandatory:'C',shortDesc:'QTY#RNG#',desc:'A group of segments specifying the quantity of the allowance or charge with its measure unit specifier. A range to which the allowance or charge applies may be specified, e.g. an allowance of a free quantity of 20 pieces may be specified if the goods quantity ordered is greater than 1000 pieces.',repeat:1,length:'',type:'',level:3,children:[
			{id:26530,label:'QTY',mandatory:'M',shortDesc:'QUANTITY',desc:'A segment identifying the type of quantity and the quantity related to the allowance or charge.',repeat:1,length:'',type:'',level:4,children:[
				{id:265300,label:'C186',mandatory:'M',shortDesc:'QUANTITY DETAILS',desc:'Quantity information in a transaction, qualified when relevant.',repeat:1,length:'',type:'',level:5,children:[
					{id:2653000,label:'6063',mandatory:'M',shortDesc:'Quantity type code qualifier',desc:'Code qualifying the type of quantity.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2653001,label:'6060',mandatory:'M',shortDesc:'Quantity',desc:'Alphanumeric representation of a quantity.',repeat:1,length:'0..35',type:'an',level:6,children:[]},
					{id:2653002,label:'6411',mandatory:'C',shortDesc:'Measurement unit code',desc:'Code specifying the unit of measurement.',repeat:1,length:'0..8',type:'an',level:6,children:[]}]}]},
			{id:26531,label:'RNG',mandatory:'C',shortDesc:'RANGE DETAILS',desc:'A segment specifying, if required, the range to which the allowance or charge applies.',repeat:1,length:'',type:'',level:4,children:[
				{id:265310,label:'6167',mandatory:'M',shortDesc:'RANGE TYPE CODE QUALIFIER',desc:'Code qualifying a type of range.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:265311,label:'C280',mandatory:'C',shortDesc:'RANGE',desc:'Range minimum and maximum limits.',repeat:1,length:'',type:'',level:5,children:[
					{id:2653110,label:'6411',mandatory:'M',shortDesc:'Measurement unit code',desc:'Code specifying the unit of measurement.',repeat:1,length:'0..8',type:'an',level:6,children:[]},
					{id:2653111,label:'6162',mandatory:'C',shortDesc:'Range minimum quantity',desc:'To specify the minimum value of a range.',repeat:1,length:'0..18',type:'n',level:6,children:[]},
					{id:2653112,label:'6152',mandatory:'C',shortDesc:'Range maximum quantity',desc:'To specify the maximum value of a range.',repeat:1,length:'0..18',type:'n',level:6,children:[]}]}]}]},
		{id:2654,label:'GRP47',mandatory:'C',shortDesc:'PCD#RNG#',desc:'A group of segments specifying the percentage for the allowance or charge e.g. The allowance/charge amount is calculated as 5% of the goods value or a price reduction of 5% may be specified if the goods quantity ordered is within the range 5 tons to 10 tons.',repeat:1,length:'',type:'',level:3,children:[
			{id:26540,label:'PCD',mandatory:'M',shortDesc:'PERCENTAGE DETAILS',desc:'A segment identifying the percentage and the percentage basis for the calculation of the allowance or charge.',repeat:1,length:'',type:'',level:4,children:[
				{id:265400,label:'C501',mandatory:'M',shortDesc:'PERCENTAGE DETAILS',desc:'Percentage relating to a specified basis.',repeat:1,length:'',type:'',level:5,children:[
					{id:2654000,label:'5245',mandatory:'M',shortDesc:'Percentage type code qualifier',desc:'Code qualifying the type of percentage.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2654001,label:'5482',mandatory:'C',shortDesc:'Percentage',desc:'To specify a percentage.',repeat:1,length:'0..10',type:'n',level:6,children:[]},
					{id:2654002,label:'5249',mandatory:'C',shortDesc:'Percentage basis identification code',desc:'Code specifying the basis on which a percentage is calculated.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2654003,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:6,children:[]},
					{id:2654004,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:6,children:[]}]},
				{id:265401,label:'4405',mandatory:'C',shortDesc:'STATUS DESCRIPTION CODE',desc:'Code specifying a status.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]},
			{id:26541,label:'RNG',mandatory:'C',shortDesc:'RANGE DETAILS',desc:'A segment specifying, if required, a range for the application of the percentage.',repeat:1,length:'',type:'',level:4,children:[
				{id:265410,label:'6167',mandatory:'M',shortDesc:'RANGE TYPE CODE QUALIFIER',desc:'Code qualifying a type of range.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:265411,label:'C280',mandatory:'C',shortDesc:'RANGE',desc:'Range minimum and maximum limits.',repeat:1,length:'',type:'',level:5,children:[
					{id:2654110,label:'6411',mandatory:'M',shortDesc:'Measurement unit code',desc:'Code specifying the unit of measurement.',repeat:1,length:'0..8',type:'an',level:6,children:[]},
					{id:2654111,label:'6162',mandatory:'C',shortDesc:'Range minimum quantity',desc:'To specify the minimum value of a range.',repeat:1,length:'0..18',type:'n',level:6,children:[]},
					{id:2654112,label:'6152',mandatory:'C',shortDesc:'Range maximum quantity',desc:'To specify the maximum value of a range.',repeat:1,length:'0..18',type:'n',level:6,children:[]}]}]}]},
		{id:2655,label:'GRP48',mandatory:'C',shortDesc:'MOA#RNG#',desc:'A group of segments specifying a monetary amount for an allowance or charge. A range to which the allowance or charge applies can be specified e.g. an allowance of 5000 BEF may be specified if goods value ordered is greater than 100000 BEF.',repeat:2,length:'',type:'',level:3,children:[
			{id:26550,label:'MOA',mandatory:'M',shortDesc:'MONETARY AMOUNT',desc:'A segment identifying the monetary amount for the allowance or charge.',repeat:1,length:'',type:'',level:4,children:[
				{id:265500,label:'C516',mandatory:'M',shortDesc:'MONETARY AMOUNT',desc:'Amount of goods or services stated as a monetary amount in a specified currency.',repeat:1,length:'',type:'',level:5,children:[
					{id:2655000,label:'5025',mandatory:'M',shortDesc:'Monetary amount type code qualifier',desc:'Code qualifying the type of monetary amount.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2655001,label:'5004',mandatory:'C',shortDesc:'Monetary amount',desc:'To specify a monetary amount.',repeat:1,length:'0..35',type:'n',level:6,children:[]},
					{id:2655002,label:'6345',mandatory:'C',shortDesc:'Currency identification code',desc:'Code specifying a monetary unit.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2655003,label:'6343',mandatory:'C',shortDesc:'Currency type code qualifier',desc:'Code qualifying the type of currency.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2655004,label:'4405',mandatory:'C',shortDesc:'Status description code',desc:'Code specifying a status.',repeat:1,length:'0..3',type:'an',level:6,children:[]}]}]},
			{id:26551,label:'RNG',mandatory:'C',shortDesc:'RANGE DETAILS',desc:'A segment specifying, if required, a range for the application of the allowance/charge amount.',repeat:1,length:'',type:'',level:4,children:[
				{id:265510,label:'6167',mandatory:'M',shortDesc:'RANGE TYPE CODE QUALIFIER',desc:'Code qualifying a type of range.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:265511,label:'C280',mandatory:'C',shortDesc:'RANGE',desc:'Range minimum and maximum limits.',repeat:1,length:'',type:'',level:5,children:[
					{id:2655110,label:'6411',mandatory:'M',shortDesc:'Measurement unit code',desc:'Code specifying the unit of measurement.',repeat:1,length:'0..8',type:'an',level:6,children:[]},
					{id:2655111,label:'6162',mandatory:'C',shortDesc:'Range minimum quantity',desc:'To specify the minimum value of a range.',repeat:1,length:'0..18',type:'n',level:6,children:[]},
					{id:2655112,label:'6152',mandatory:'C',shortDesc:'Range maximum quantity',desc:'To specify the maximum value of a range.',repeat:1,length:'0..18',type:'n',level:6,children:[]}]}]}]},
		{id:2656,label:'GRP49',mandatory:'C',shortDesc:'RTE#RNG#',desc:'A group of segments specifying the rate per unit and basis to which the allowance or charge applies e.g. The allowance/charge amount is 3 DEM per 10 tons.',repeat:1,length:'',type:'',level:3,children:[
			{id:26560,label:'RTE',mandatory:'M',shortDesc:'RATE DETAILS',desc:'A segment specifying the rate per unit and the basis for calculation.',repeat:1,length:'',type:'',level:4,children:[
				{id:265600,label:'C128',mandatory:'M',shortDesc:'RATE DETAILS',desc:'Rate per unit and rate basis.',repeat:1,length:'',type:'',level:5,children:[
					{id:2656000,label:'5419',mandatory:'M',shortDesc:'Rate type code qualifier',desc:'Code qualifying the type of rate.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2656001,label:'5420',mandatory:'M',shortDesc:'Unit price basis rate',desc:'To specify the rate per unit specified in the unit price basis.',repeat:1,length:'0..15',type:'n',level:6,children:[]},
					{id:2656002,label:'5284',mandatory:'C',shortDesc:'Unit price basis quantity',desc:'To specify the basis for a unit price.',repeat:1,length:'0..9',type:'n',level:6,children:[]},
					{id:2656003,label:'6411',mandatory:'C',shortDesc:'Measurement unit code',desc:'Code specifying the unit of measurement.',repeat:1,length:'0..8',type:'an',level:6,children:[]}]},
				{id:265601,label:'4405',mandatory:'C',shortDesc:'STATUS DESCRIPTION CODE',desc:'Code specifying a status.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]},
			{id:26561,label:'RNG',mandatory:'C',shortDesc:'RANGE DETAILS',desc:'A segment specifying, if required, the range for the application of the allowance/charge rate.',repeat:1,length:'',type:'',level:4,children:[
				{id:265610,label:'6167',mandatory:'M',shortDesc:'RANGE TYPE CODE QUALIFIER',desc:'Code qualifying a type of range.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:265611,label:'C280',mandatory:'C',shortDesc:'RANGE',desc:'Range minimum and maximum limits.',repeat:1,length:'',type:'',level:5,children:[
					{id:2656110,label:'6411',mandatory:'M',shortDesc:'Measurement unit code',desc:'Code specifying the unit of measurement.',repeat:1,length:'0..8',type:'an',level:6,children:[]},
					{id:2656111,label:'6162',mandatory:'C',shortDesc:'Range minimum quantity',desc:'To specify the minimum value of a range.',repeat:1,length:'0..18',type:'n',level:6,children:[]},
					{id:2656112,label:'6152',mandatory:'C',shortDesc:'Range maximum quantity',desc:'To specify the maximum value of a range.',repeat:1,length:'0..18',type:'n',level:6,children:[]}]}]}]},
		{id:2657,label:'GRP50',mandatory:'C',shortDesc:'TAX#MOA#',desc:'A group of segments specifying tax related information for the allowance or charge.',repeat:5,length:'',type:'',level:3,children:[
			{id:26570,label:'TAX',mandatory:'M',shortDesc:'DUTY/TAX/FEE DETAILS',desc:'A segment specifying the tax type, category and rate, or exemption, related to the allowance or charge.',repeat:1,length:'',type:'',level:4,children:[
				{id:265700,label:'5283',mandatory:'M',shortDesc:'DUTY OR TAX OR FEE FUNCTION CODE QUALIFIER',desc:'Code qualifying the function of a duty or tax or fee.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:265701,label:'C241',mandatory:'C',shortDesc:'DUTY/TAX/FEE TYPE',desc:'Code and/or name identifying duty, tax or fee.',repeat:1,length:'',type:'',level:5,children:[
					{id:2657010,label:'5153',mandatory:'C',shortDesc:'Duty or tax or fee type name code',desc:'Code specifying a type of duty, tax or fee.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2657011,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:6,children:[]},
					{id:2657012,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2657013,label:'5152',mandatory:'C',shortDesc:'Duty or tax or fee type name',desc:'Name of a type of duty, tax or fee.',repeat:1,length:'0..35',type:'an',level:6,children:[]}]},
				{id:265702,label:'C533',mandatory:'C',shortDesc:'DUTY/TAX/FEE ACCOUNT DETAIL',desc:'Indication of account reference for duties, taxes and/or fees.',repeat:1,length:'',type:'',level:5,children:[
					{id:2657020,label:'5289',mandatory:'M',shortDesc:'Duty or tax or fee account code',desc:'Code specifying a duty or tax or fee account.',repeat:1,length:'0..6',type:'an',level:6,children:[]},
					{id:2657021,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:6,children:[]},
					{id:2657022,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:6,children:[]}]},
				{id:265703,label:'5286',mandatory:'C',shortDesc:'DUTY OR TAX OR FEE ASSESSMENT BASIS QUANTITY',desc:'To specify the basis on which a duty or tax or fee will be assessed.',repeat:1,length:'0..15',type:'an',level:5,children:[]},
				{id:265704,label:'C243',mandatory:'C',shortDesc:'DUTY/TAX/FEE DETAIL',desc:'Rate of duty/tax/fee applicable to commodities or of tax applicable to services.',repeat:1,length:'',type:'',level:5,children:[
					{id:2657040,label:'5279',mandatory:'C',shortDesc:'Duty or tax or fee rate code',desc:'Code specifying a rate of a duty or tax or fee.',repeat:1,length:'0..7',type:'an',level:6,children:[]},
					{id:2657041,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:6,children:[]},
					{id:2657042,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2657043,label:'5278',mandatory:'C',shortDesc:'Duty or tax or fee rate',desc:'Rate of a duty or tax or fee.',repeat:1,length:'0..17',type:'an',level:6,children:[]},
					{id:2657044,label:'5273',mandatory:'C',shortDesc:'Duty or tax or fee rate basis code',desc:'Code specifying the basis for a duty or tax or fee rate.',repeat:1,length:'0..12',type:'an',level:6,children:[]},
					{id:2657045,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:6,children:[]},
					{id:2657046,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:6,children:[]}]},
				{id:265705,label:'5305',mandatory:'C',shortDesc:'DUTY OR TAX OR FEE CATEGORY CODE',desc:'Code specifying a duty or tax or fee category.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:265706,label:'3446',mandatory:'C',shortDesc:'PARTY TAX IDENTIFIER',desc:'To identify a number assigned to a party by a tax authority.',repeat:1,length:'0..20',type:'an',level:5,children:[]},
				{id:265707,label:'1227',mandatory:'C',shortDesc:'CALCULATION SEQUENCE CODE',desc:'Code specifying a calculation sequence.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:265708,label:'5307',mandatory:'C',shortDesc:'TAX OR DUTY OR FEE PAYMENT DUE DATE CODE',desc:'A code indicating when the duty, tax, or fee payment will be due.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]},
			{id:26571,label:'MOA',mandatory:'C',shortDesc:'MONETARY AMOUNT',desc:'A segment specifying the tax amount for the allowance or charge.',repeat:1,length:'',type:'',level:4,children:[
				{id:265710,label:'C516',mandatory:'M',shortDesc:'MONETARY AMOUNT',desc:'Amount of goods or services stated as a monetary amount in a specified currency.',repeat:1,length:'',type:'',level:5,children:[
					{id:2657100,label:'5025',mandatory:'M',shortDesc:'Monetary amount type code qualifier',desc:'Code qualifying the type of monetary amount.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2657101,label:'5004',mandatory:'C',shortDesc:'Monetary amount',desc:'To specify a monetary amount.',repeat:1,length:'0..35',type:'n',level:6,children:[]},
					{id:2657102,label:'6345',mandatory:'C',shortDesc:'Currency identification code',desc:'Code specifying a monetary unit.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2657103,label:'6343',mandatory:'C',shortDesc:'Currency type code qualifier',desc:'Code qualifying the type of currency.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2657104,label:'4405',mandatory:'C',shortDesc:'Status description code',desc:'Code specifying a status.',repeat:1,length:'0..3',type:'an',level:6,children:[]}]}]}]}]},
	{id:266,label:'GRP51',mandatory:'C',shortDesc:'TDT#GRP52#',desc:'A group of segments identifying the mode and means of transport, location and relevant dates and times for transportation, relating to the line item, where this is different to or not specified within the heading section.',repeat:10,length:'',type:'',level:2,children:[
		{id:2660,label:'TDT',mandatory:'M',shortDesc:'TRANSPORT INFORMATION',desc:'A segment specifying the mode, means and identification of the transport for the goods item being ordered, where this is different to or not specified within the heading section.',repeat:1,length:'',type:'',level:3,children:[
			{id:26600,label:'8051',mandatory:'M',shortDesc:'TRANSPORT STAGE CODE QUALIFIER',desc:'Code qualifying a specific stage of transport.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:26601,label:'8028',mandatory:'C',shortDesc:'MEANS OF TRANSPORT JOURNEY IDENTIFIER',desc:'To identify a journey of a means of transport.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:26602,label:'C220',mandatory:'C',shortDesc:'MODE OF TRANSPORT',desc:'Method of transport code or name. Code preferred.',repeat:1,length:'',type:'',level:4,children:[
				{id:266020,label:'8067',mandatory:'C',shortDesc:'Transport mode name code',desc:'Code specifying the name of a mode of transport.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:266021,label:'8066',mandatory:'C',shortDesc:'Transport mode name',desc:'Name of a mode of transport.',repeat:1,length:'0..17',type:'an',level:5,children:[]}]},
			{id:26603,label:'C001',mandatory:'C',shortDesc:'TRANSPORT MEANS',desc:'Code and/or name identifying the type of means of transport.',repeat:1,length:'',type:'',level:4,children:[
				{id:266030,label:'8179',mandatory:'C',shortDesc:'Transport means description code',desc:'Code specifying the means of transport.',repeat:1,length:'0..8',type:'an',level:5,children:[]},
				{id:266031,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:266032,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:266033,label:'8178',mandatory:'C',shortDesc:'Transport means description',desc:'Free form description of the means of transport.',repeat:1,length:'0..17',type:'an',level:5,children:[]}]},
			{id:26604,label:'C040',mandatory:'C',shortDesc:'CARRIER',desc:'Identification of a carrier by code and/or by name. Code preferred.',repeat:1,length:'',type:'',level:4,children:[
				{id:266040,label:'3127',mandatory:'C',shortDesc:'Carrier identifier',desc:'To identify a carrier.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:266041,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:266042,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:266043,label:'3126',mandatory:'C',shortDesc:'Carrier name',desc:'Name of a carrier.',repeat:1,length:'0..35',type:'an',level:5,children:[]}]},
			{id:26605,label:'8101',mandatory:'C',shortDesc:'TRANSIT DIRECTION INDICATOR CODE',desc:'Code specifying the direction of transport.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:26606,label:'C401',mandatory:'C',shortDesc:'EXCESS TRANSPORTATION INFORMATION',desc:'To provide details of reason for, and responsibility for, use of transportation other than normally utilized.',repeat:1,length:'',type:'',level:4,children:[
				{id:266060,label:'8457',mandatory:'M',shortDesc:'Excess transportation reason code',desc:'Code specifying the reason for excess transportation.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:266061,label:'8459',mandatory:'M',shortDesc:'Excess transportation responsibility code',desc:'Code specifying the responsibility for excess transportation.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:266062,label:'7130',mandatory:'C',shortDesc:'Customer shipment authorisation identifier',desc:'To identify the authorisation to ship issued by the customer.',repeat:1,length:'0..17',type:'an',level:5,children:[]}]},
			{id:26607,label:'C222',mandatory:'C',shortDesc:'TRANSPORT IDENTIFICATION',desc:'Code and/or name identifying the means of transport.',repeat:1,length:'',type:'',level:4,children:[
				{id:266070,label:'8213',mandatory:'C',shortDesc:'Transport means identification name identifier',desc:'Identifies the name of the transport means.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:266071,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:266072,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:266073,label:'8212',mandatory:'C',shortDesc:'Transport means identification name',desc:'Name identifying a means of transport.',repeat:1,length:'0..70',type:'an',level:5,children:[]},
				{id:266074,label:'8453',mandatory:'C',shortDesc:'Transport means nationality code',desc:'Code specifying the nationality of a means of transport.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]},
			{id:26608,label:'8281',mandatory:'C',shortDesc:'TRANSPORT MEANS OWNERSHIP INDICATOR CODE',desc:'Code indicating the ownership of a means of transport.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:26609,label:'C003',mandatory:'C',shortDesc:'POWER TYPE',desc:'To specify the type of power.',repeat:1,length:'',type:'',level:4,children:[
				{id:266090,label:'7041',mandatory:'C',shortDesc:'Power type code',desc:'Code indicating the type of power.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:266091,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:266092,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:266093,label:'7040',mandatory:'C',shortDesc:'Power type description',desc:'Description of the type of power.',repeat:1,length:'0..17',type:'an',level:5,children:[]}]}]},
		{id:2661,label:'GRP52',mandatory:'C',shortDesc:'LOC#DTM#',desc:'A group of segments giving the location and date/time information relative to the transportation.',repeat:10,length:'',type:'',level:3,children:[
			{id:26610,label:'LOC',mandatory:'M',shortDesc:'PLACE/LOCATION IDENTIFICATION',desc:'A segment identifying locations relevant to the transport specified in the TDT segment.',repeat:1,length:'',type:'',level:4,children:[
				{id:266100,label:'3227',mandatory:'M',shortDesc:'LOCATION FUNCTION CODE QUALIFIER',desc:'Code identifying the function of a location.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:266101,label:'C517',mandatory:'C',shortDesc:'LOCATION IDENTIFICATION',desc:'Identification of a location by code or name.',repeat:1,length:'',type:'',level:5,children:[
					{id:2661010,label:'3225',mandatory:'C',shortDesc:'Location identifier',desc:'To identify a location.',repeat:1,length:'0..35',type:'an',level:6,children:[]},
					{id:2661011,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:6,children:[]},
					{id:2661012,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2661013,label:'3224',mandatory:'C',shortDesc:'Location name',desc:'Name of the location.',repeat:1,length:'0..256',type:'an',level:6,children:[]}]},
				{id:266102,label:'C519',mandatory:'C',shortDesc:'RELATED LOCATION ONE IDENTIFICATION',desc:'Identification the first related location by code or name.',repeat:1,length:'',type:'',level:5,children:[
					{id:2661020,label:'3223',mandatory:'C',shortDesc:'First related location identifier',desc:'To identify a first related location.',repeat:1,length:'0..35',type:'an',level:6,children:[]},
					{id:2661021,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:6,children:[]},
					{id:2661022,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2661023,label:'3222',mandatory:'C',shortDesc:'First related location name',desc:'Name of first related location.',repeat:1,length:'0..70',type:'an',level:6,children:[]}]},
				{id:266103,label:'C553',mandatory:'C',shortDesc:'RELATED LOCATION TWO IDENTIFICATION',desc:'Identification of second related location by code or name.',repeat:1,length:'',type:'',level:5,children:[
					{id:2661030,label:'3233',mandatory:'C',shortDesc:'Second related location identifier',desc:'To identify a second related location.',repeat:1,length:'0..35',type:'an',level:6,children:[]},
					{id:2661031,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:6,children:[]},
					{id:2661032,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2661033,label:'3232',mandatory:'C',shortDesc:'Second related location name',desc:'Name of the second related location.',repeat:1,length:'0..70',type:'an',level:6,children:[]}]},
				{id:266104,label:'5479',mandatory:'C',shortDesc:'RELATION CODE',desc:'Code specifying a relation.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]},
			{id:26611,label:'DTM',mandatory:'C',shortDesc:'DATE/TIME/PERIOD',desc:'A segment identifying the date/time details of departure and/or arrival of the transported goods for the specified location.',repeat:5,length:'',type:'',level:4,children:[
				{id:266110,label:'C507',mandatory:'M',shortDesc:'DATE/TIME/PERIOD',desc:'Date and/or time, or period relevant to the specified date/time/period type.',repeat:1,length:'',type:'',level:5,children:[
					{id:2661100,label:'2005',mandatory:'M',shortDesc:'Date or time or period function code qualifier',desc:'Code qualifying the function of a date, time or period.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2661101,label:'2380',mandatory:'C',shortDesc:'Date or time or period text',desc:'The value of a date, a date and time, a time or of a period in a specified representation.',repeat:1,length:'0..35',type:'an',level:6,children:[]},
					{id:2661102,label:'2379',mandatory:'C',shortDesc:'Date or time or period format code',desc:'Code specifying the representation of a date, time or period.',repeat:1,length:'0..3',type:'an',level:6,children:[]}]}]}]}]},
	{id:267,label:'GRP53',mandatory:'C',shortDesc:'TOD#LOC#',desc:'A group of segments indicating the terms of delivery for the line item where this is different to or not specified within the heading section.',repeat:5,length:'',type:'',level:2,children:[
		{id:2670,label:'TOD',mandatory:'M',shortDesc:'TERMS OF DELIVERY OR TRANSPORT',desc:'A segment identifying the delivery terms to be used.',repeat:1,length:'',type:'',level:3,children:[
			{id:26700,label:'4055',mandatory:'C',shortDesc:'DELIVERY OR TRANSPORT TERMS FUNCTION CODE',desc:'Code specifying the function of delivery or transport terms.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:26701,label:'4215',mandatory:'C',shortDesc:'TRANSPORT CHARGES PAYMENT METHOD CODE',desc:'Code specifying the payment method for transport charges.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:26702,label:'C100',mandatory:'C',shortDesc:'TERMS OF DELIVERY OR TRANSPORT',desc:'Terms of delivery or transport code from a specified source.',repeat:1,length:'',type:'',level:4,children:[
				{id:267020,label:'4053',mandatory:'C',shortDesc:'Delivery or transport terms description code',desc:'Code specifying the delivery or transport terms.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:267021,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:267022,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:267023,label:'4052',mandatory:'C',shortDesc:'Delivery or transport terms description',desc:'Free form description of delivery or transport terms.',repeat:1,length:'0..70',type:'an',level:5,children:[]},
				{id:267024,label:'4052',mandatory:'C',shortDesc:'Delivery or transport terms description',desc:'Free form description of delivery or transport terms.',repeat:1,length:'0..70',type:'an',level:5,children:[]}]}]},
		{id:2671,label:'LOC',mandatory:'C',shortDesc:'PLACE/LOCATION IDENTIFICATION',desc:'A segment identifying locations relevant to the delivery terms specified in the TOD segment.',repeat:2,length:'',type:'',level:3,children:[
			{id:26710,label:'3227',mandatory:'M',shortDesc:'LOCATION FUNCTION CODE QUALIFIER',desc:'Code identifying the function of a location.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:26711,label:'C517',mandatory:'C',shortDesc:'LOCATION IDENTIFICATION',desc:'Identification of a location by code or name.',repeat:1,length:'',type:'',level:4,children:[
				{id:267110,label:'3225',mandatory:'C',shortDesc:'Location identifier',desc:'To identify a location.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:267111,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:267112,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:267113,label:'3224',mandatory:'C',shortDesc:'Location name',desc:'Name of the location.',repeat:1,length:'0..256',type:'an',level:5,children:[]}]},
			{id:26712,label:'C519',mandatory:'C',shortDesc:'RELATED LOCATION ONE IDENTIFICATION',desc:'Identification the first related location by code or name.',repeat:1,length:'',type:'',level:4,children:[
				{id:267120,label:'3223',mandatory:'C',shortDesc:'First related location identifier',desc:'To identify a first related location.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:267121,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:267122,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:267123,label:'3222',mandatory:'C',shortDesc:'First related location name',desc:'Name of first related location.',repeat:1,length:'0..70',type:'an',level:5,children:[]}]},
			{id:26713,label:'C553',mandatory:'C',shortDesc:'RELATED LOCATION TWO IDENTIFICATION',desc:'Identification of second related location by code or name.',repeat:1,length:'',type:'',level:4,children:[
				{id:267130,label:'3233',mandatory:'C',shortDesc:'Second related location identifier',desc:'To identify a second related location.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:267131,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:267132,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:267133,label:'3232',mandatory:'C',shortDesc:'Second related location name',desc:'Name of the second related location.',repeat:1,length:'0..70',type:'an',level:5,children:[]}]},
			{id:26714,label:'5479',mandatory:'C',shortDesc:'RELATION CODE',desc:'Code specifying a relation.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]}]},
	{id:268,label:'GRP54',mandatory:'C',shortDesc:'EQD#HAN#MEA#FTX#',desc:'A group of segments providing information relating to equipment identification and ownership, handling and notification of hazardous materials, relating to the line item where this is different to or not specified within the heading section.',repeat:10,length:'',type:'',level:2,children:[
		{id:2680,label:'EQD',mandatory:'M',shortDesc:'EQUIPMENT DETAILS',desc:'A segment to define fixed information regarding equipment to be used in conjunction with the ordered item, and if required, to indicate responsibility for supply of the equipment e.g. a container identification.',repeat:1,length:'',type:'',level:3,children:[
			{id:26800,label:'8053',mandatory:'M',shortDesc:'EQUIPMENT TYPE CODE QUALIFIER',desc:'Code qualifying a type of equipment.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:26801,label:'C237',mandatory:'C',shortDesc:'EQUIPMENT IDENTIFICATION',desc:'Marks (letters/numbers) identifying equipment.',repeat:1,length:'',type:'',level:4,children:[
				{id:268010,label:'8260',mandatory:'C',shortDesc:'Equipment identifier',desc:'To identify equipment.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:268011,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:268012,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:268013,label:'3207',mandatory:'C',shortDesc:'Country identifier',desc:'Identification of the name of the country or other geographical entity as defined in ISO 3166-1 and UN/ECE Recommendation 3.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]},
			{id:26802,label:'C224',mandatory:'C',shortDesc:'EQUIPMENT SIZE AND TYPE',desc:'Code and or name identifying size and type of equipment. Code preferred.',repeat:1,length:'',type:'',level:4,children:[
				{id:268020,label:'8155',mandatory:'C',shortDesc:'Equipment size and type description code',desc:'Code specifying the size and type of equipment.',repeat:1,length:'0..10',type:'an',level:5,children:[]},
				{id:268021,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:268022,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:268023,label:'8154',mandatory:'C',shortDesc:'Equipment size and type description',desc:'Free form description of the size and type of equipment.',repeat:1,length:'0..35',type:'an',level:5,children:[]}]},
			{id:26803,label:'8077',mandatory:'C',shortDesc:'EQUIPMENT SUPPLIER CODE',desc:'Code specifying the party that is the supplier of the equipment.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:26804,label:'8249',mandatory:'C',shortDesc:'EQUIPMENT STATUS CODE',desc:'Code specifying the status of equipment.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:26805,label:'8169',mandatory:'C',shortDesc:'FULL OR EMPTY INDICATOR CODE',desc:'Code indicating whether an object is full or empty.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:26806,label:'4233',mandatory:'C',shortDesc:'MARKING INSTRUCTIONS CODE',desc:'Code specifying instructions for marking.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:2681,label:'HAN',mandatory:'C',shortDesc:'HANDLING INSTRUCTIONS',desc:'A segment providing information on required handling of materials and additionally, if required, identifying hazardous materials in the ordered item.',repeat:5,length:'',type:'',level:3,children:[
			{id:26810,label:'C524',mandatory:'C',shortDesc:'HANDLING INSTRUCTIONS',desc:'Instruction for the handling of goods, products or articles in shipment, storage etc.',repeat:1,length:'',type:'',level:4,children:[
				{id:268100,label:'4079',mandatory:'C',shortDesc:'Handling instruction description code',desc:'Code specifying a handling instruction.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:268101,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:268102,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:268103,label:'4078',mandatory:'C',shortDesc:'Handling instruction description',desc:'Free form description of a handling instruction.',repeat:1,length:'0..512',type:'an',level:5,children:[]}]},
			{id:26811,label:'C218',mandatory:'C',shortDesc:'HAZARDOUS MATERIAL',desc:'To specify a hazardous material.',repeat:1,length:'',type:'',level:4,children:[
				{id:268110,label:'7419',mandatory:'C',shortDesc:'Hazardous material category name code',desc:'Code specifying a kind of hazard for a material.',repeat:1,length:'0..7',type:'an',level:5,children:[]},
				{id:268111,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:268112,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:268113,label:'7418',mandatory:'C',shortDesc:'Hazardous material category name',desc:'Name of a kind of hazard for a material.',repeat:1,length:'0..35',type:'an',level:5,children:[]}]}]},
		{id:2682,label:'MEA',mandatory:'C',shortDesc:'MEASUREMENTS',desc:'A segment providing measurement information for the equipment.',repeat:5,length:'',type:'',level:3,children:[
			{id:26820,label:'6311',mandatory:'M',shortDesc:'MEASUREMENT PURPOSE CODE QUALIFIER',desc:'Code qualifying the purpose of the measurement.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:26821,label:'C502',mandatory:'C',shortDesc:'MEASUREMENT DETAILS',desc:'Identification of measurement type.',repeat:1,length:'',type:'',level:4,children:[
				{id:268210,label:'6313',mandatory:'C',shortDesc:'Measured attribute code',desc:'Code specifying the attribute measured.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:268211,label:'6321',mandatory:'C',shortDesc:'Measurement significance code',desc:'Code specifying the significance of a measurement.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:268212,label:'6155',mandatory:'C',shortDesc:'Non-discrete measurement name code',desc:'Code specifying the name of a non-discrete measurement.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:268213,label:'6154',mandatory:'C',shortDesc:'Non-discrete measurement name',desc:'Name of a non-discrete measurement.',repeat:1,length:'0..70',type:'an',level:5,children:[]}]},
			{id:26822,label:'C174',mandatory:'C',shortDesc:'VALUE/RANGE',desc:'Measurement value and relevant minimum and maximum values of the measurement range.',repeat:1,length:'',type:'',level:4,children:[
				{id:268220,label:'6411',mandatory:'M',shortDesc:'Measurement unit code',desc:'Code specifying the unit of measurement.',repeat:1,length:'0..8',type:'an',level:5,children:[]},
				{id:268221,label:'6314',mandatory:'C',shortDesc:'Measure',desc:'To specify the value of a measurement.',repeat:1,length:'0..18',type:'an',level:5,children:[]},
				{id:268222,label:'6162',mandatory:'C',shortDesc:'Range minimum quantity',desc:'To specify the minimum value of a range.',repeat:1,length:'0..18',type:'n',level:5,children:[]},
				{id:268223,label:'6152',mandatory:'C',shortDesc:'Range maximum quantity',desc:'To specify the maximum value of a range.',repeat:1,length:'0..18',type:'n',level:5,children:[]},
				{id:268224,label:'6432',mandatory:'C',shortDesc:'Significant digits quantity',desc:'Count of the number of significant digits.',repeat:1,length:'0..2',type:'n',level:5,children:[]}]},
			{id:26823,label:'7383',mandatory:'C',shortDesc:'SURFACE OR LAYER CODE',desc:'Code specifying the surface or layer of an object.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:2683,label:'FTX',mandatory:'C',shortDesc:'FREE TEXT',desc:'A segment with free text information, in coded or clear form, to give further clarification, when required, to the equipment and handling details. In computer to computer exchanges such text will normally require the receiver to process this segment manually.',repeat:5,length:'',type:'',level:3,children:[
			{id:26830,label:'4451',mandatory:'M',shortDesc:'TEXT SUBJECT CODE QUALIFIER',desc:'Code qualifying the subject of the text.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:26831,label:'4453',mandatory:'C',shortDesc:'FREE TEXT FUNCTION CODE',desc:'Code specifying the function of free text.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:26832,label:'C107',mandatory:'C',shortDesc:'TEXT REFERENCE',desc:'Coded reference to a standard text and its source.',repeat:1,length:'',type:'',level:4,children:[
				{id:268320,label:'4441',mandatory:'M',shortDesc:'Free text description code',desc:'Code specifying free form text.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:268321,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:268322,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]},
			{id:26833,label:'C108',mandatory:'C',shortDesc:'TEXT LITERAL',desc:'Free text; one to five lines.',repeat:1,length:'',type:'',level:4,children:[
				{id:268330,label:'4440',mandatory:'M',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:5,children:[]},
				{id:268331,label:'4440',mandatory:'C',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:5,children:[]},
				{id:268332,label:'4440',mandatory:'C',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:5,children:[]},
				{id:268333,label:'4440',mandatory:'C',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:5,children:[]},
				{id:268334,label:'4440',mandatory:'C',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:5,children:[]}]},
			{id:26834,label:'3453',mandatory:'C',shortDesc:'LANGUAGE NAME CODE',desc:'Code specifying the language name.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:26835,label:'4447',mandatory:'C',shortDesc:'FREE TEXT FORMAT CODE',desc:'Code specifying the format of free text.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]}]},
	{id:269,label:'GRP55',mandatory:'C',shortDesc:'SCC#FTX#RFF#GRP56#',desc:'A group of segments specifying requested delivery schedules relating to quantities, frequencies, and dates, required for the line item, where this is different to or not specified within the heading section.',repeat:100,length:'',type:'',level:2,children:[
		{id:2690,label:'SCC',mandatory:'M',shortDesc:'SCHEDULING CONDITIONS',desc:'A segment specifying the type and status of the schedule being given, and optionally defining a pattern to be established e.g. firm or proposed delivery schedule for a weekly pattern.',repeat:1,length:'',type:'',level:3,children:[
			{id:26900,label:'4017',mandatory:'M',shortDesc:'DELIVERY PLAN COMMITMENT LEVEL CODE',desc:'Code specifying the level of commitment to a delivery plan.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:26901,label:'4493',mandatory:'C',shortDesc:'DELIVERY INSTRUCTION CODE',desc:'Code specifying a delivery instruction.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:26902,label:'C329',mandatory:'C',shortDesc:'PATTERN DESCRIPTION',desc:'Shipment, delivery or production interval pattern and timing.',repeat:1,length:'',type:'',level:4,children:[
				{id:269020,label:'2013',mandatory:'C',shortDesc:'Frequency code',desc:'Code specifying the rate of recurrence.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:269021,label:'2015',mandatory:'C',shortDesc:'Despatch pattern code',desc:'Code specifying a despatch pattern.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:269022,label:'2017',mandatory:'C',shortDesc:'Despatch pattern timing code',desc:'Code specifying a set of dates/times within a despatch pattern.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]}]},
		{id:2691,label:'FTX',mandatory:'C',shortDesc:'FREE TEXT',desc:'A segment with free text information, in coded or clear form, used when additional information is needed but cannot be accommodated within other segments. In computer to computer exchanges such text will normally require the receiver to process this segment manually.',repeat:5,length:'',type:'',level:3,children:[
			{id:26910,label:'4451',mandatory:'M',shortDesc:'TEXT SUBJECT CODE QUALIFIER',desc:'Code qualifying the subject of the text.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:26911,label:'4453',mandatory:'C',shortDesc:'FREE TEXT FUNCTION CODE',desc:'Code specifying the function of free text.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:26912,label:'C107',mandatory:'C',shortDesc:'TEXT REFERENCE',desc:'Coded reference to a standard text and its source.',repeat:1,length:'',type:'',level:4,children:[
				{id:269120,label:'4441',mandatory:'M',shortDesc:'Free text description code',desc:'Code specifying free form text.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:269121,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:269122,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]},
			{id:26913,label:'C108',mandatory:'C',shortDesc:'TEXT LITERAL',desc:'Free text; one to five lines.',repeat:1,length:'',type:'',level:4,children:[
				{id:269130,label:'4440',mandatory:'M',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:5,children:[]},
				{id:269131,label:'4440',mandatory:'C',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:5,children:[]},
				{id:269132,label:'4440',mandatory:'C',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:5,children:[]},
				{id:269133,label:'4440',mandatory:'C',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:5,children:[]},
				{id:269134,label:'4440',mandatory:'C',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:5,children:[]}]},
			{id:26914,label:'3453',mandatory:'C',shortDesc:'LANGUAGE NAME CODE',desc:'Code specifying the language name.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:26915,label:'4447',mandatory:'C',shortDesc:'FREE TEXT FORMAT CODE',desc:'Code specifying the format of free text.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:2692,label:'RFF',mandatory:'C',shortDesc:'REFERENCE',desc:'A segment for specifying references relevant to a schedule.',repeat:5,length:'',type:'',level:3,children:[
			{id:26920,label:'C506',mandatory:'M',shortDesc:'REFERENCE',desc:'Identification of a reference.',repeat:1,length:'',type:'',level:4,children:[
				{id:269200,label:'1153',mandatory:'M',shortDesc:'Reference code qualifier',desc:'Code qualifying a reference.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:269201,label:'1154',mandatory:'C',shortDesc:'Reference identifier',desc:'Identifies a reference.',repeat:1,length:'0..70',type:'an',level:5,children:[]},
				{id:269202,label:'1156',mandatory:'C',shortDesc:'Document line identifier',desc:'To identify a line of a document.',repeat:1,length:'0..6',type:'an',level:5,children:[]},
				{id:269203,label:'1056',mandatory:'C',shortDesc:'Version identifier',desc:'To identify a version.',repeat:1,length:'0..9',type:'an',level:5,children:[]},
				{id:269204,label:'1060',mandatory:'C',shortDesc:'Revision identifier',desc:'To identify a revision.',repeat:1,length:'0..6',type:'an',level:5,children:[]}]}]},
		{id:2693,label:'GRP56',mandatory:'C',shortDesc:'QTY#DTM#',desc:'A group of segments to specify the scheduled quantities, date/time details of the schedule and where required the reference of the schedule.',repeat:10,length:'',type:'',level:3,children:[
			{id:26930,label:'QTY',mandatory:'M',shortDesc:'QUANTITY',desc:'A segment to specify pertinent quantities relating to the schedule and pattern established in the SCC segment e.g. delivery quantity.',repeat:1,length:'',type:'',level:4,children:[
				{id:269300,label:'C186',mandatory:'M',shortDesc:'QUANTITY DETAILS',desc:'Quantity information in a transaction, qualified when relevant.',repeat:1,length:'',type:'',level:5,children:[
					{id:2693000,label:'6063',mandatory:'M',shortDesc:'Quantity type code qualifier',desc:'Code qualifying the type of quantity.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2693001,label:'6060',mandatory:'M',shortDesc:'Quantity',desc:'Alphanumeric representation of a quantity.',repeat:1,length:'0..35',type:'an',level:6,children:[]},
					{id:2693002,label:'6411',mandatory:'C',shortDesc:'Measurement unit code',desc:'Code specifying the unit of measurement.',repeat:1,length:'0..8',type:'an',level:6,children:[]}]}]},
			{id:26931,label:'DTM',mandatory:'C',shortDesc:'DATE/TIME/PERIOD',desc:'A segment indicating the date/time details relating to the quantity and schedule details in the SCC/QTY segments. This segment may be repeated to indicate date/time ranges, e.g. start and end dates for a delivery pattern, or delivery window.',repeat:5,length:'',type:'',level:4,children:[
				{id:269310,label:'C507',mandatory:'M',shortDesc:'DATE/TIME/PERIOD',desc:'Date and/or time, or period relevant to the specified date/time/period type.',repeat:1,length:'',type:'',level:5,children:[
					{id:2693100,label:'2005',mandatory:'M',shortDesc:'Date or time or period function code qualifier',desc:'Code qualifying the function of a date, time or period.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2693101,label:'2380',mandatory:'C',shortDesc:'Date or time or period text',desc:'The value of a date, a date and time, a time or of a period in a specified representation.',repeat:1,length:'0..35',type:'an',level:6,children:[]},
					{id:2693102,label:'2379',mandatory:'C',shortDesc:'Date or time or period format code',desc:'Code specifying the representation of a date, time or period.',repeat:1,length:'0..3',type:'an',level:6,children:[]}]}]}]}]},
	{id:270,label:'GRP57',mandatory:'C',shortDesc:'RCS#RFF#DTM#FTX#',desc:'A group of segments identifying any rules, laws or regulations with which the supplier must comply to meet requirements e.g. building regulations, safety requirements, etc.',repeat:999,length:'',type:'',level:2,children:[
		{id:2700,label:'RCS',mandatory:'M',shortDesc:'REQUIREMENTS AND CONDITIONS',desc:'A segment to enable industry or national requirements to be specified.',repeat:1,length:'',type:'',level:3,children:[
			{id:27000,label:'7293',mandatory:'M',shortDesc:'SECTOR AREA IDENTIFICATION CODE QUALIFIER',desc:'Code qualifying identification of a subject area.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:27001,label:'C550',mandatory:'C',shortDesc:'REQUIREMENT/CONDITION IDENTIFICATION',desc:'To identify the specific rule/condition requirement.',repeat:1,length:'',type:'',level:4,children:[
				{id:270010,label:'7295',mandatory:'M',shortDesc:'Requirement or condition description identifier',desc:'Code specifying a requirement or condition.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:270011,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:270012,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:270013,label:'7294',mandatory:'C',shortDesc:'Requirement or condition description',desc:'Free form description of a requirement or condition.',repeat:1,length:'0..35',type:'an',level:5,children:[]}]},
			{id:27002,label:'1229',mandatory:'C',shortDesc:'ACTION CODE',desc:'Code specifying the action to be taken or already taken.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:27003,label:'3207',mandatory:'C',shortDesc:'COUNTRY IDENTIFIER',desc:'Identification of the name of the country or other geographical entity as defined in ISO 3166-1 and UN/ECE Recommendation 3.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:2701,label:'RFF',mandatory:'C',shortDesc:'REFERENCE',desc:'A segment identifying the referenced document by its number and where appropriate, a line number.',repeat:5,length:'',type:'',level:3,children:[
			{id:27010,label:'C506',mandatory:'M',shortDesc:'REFERENCE',desc:'Identification of a reference.',repeat:1,length:'',type:'',level:4,children:[
				{id:270100,label:'1153',mandatory:'M',shortDesc:'Reference code qualifier',desc:'Code qualifying a reference.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:270101,label:'1154',mandatory:'C',shortDesc:'Reference identifier',desc:'Identifies a reference.',repeat:1,length:'0..70',type:'an',level:5,children:[]},
				{id:270102,label:'1156',mandatory:'C',shortDesc:'Document line identifier',desc:'To identify a line of a document.',repeat:1,length:'0..6',type:'an',level:5,children:[]},
				{id:270103,label:'1056',mandatory:'C',shortDesc:'Version identifier',desc:'To identify a version.',repeat:1,length:'0..9',type:'an',level:5,children:[]},
				{id:270104,label:'1060',mandatory:'C',shortDesc:'Revision identifier',desc:'To identify a revision.',repeat:1,length:'0..6',type:'an',level:5,children:[]}]}]},
		{id:2702,label:'DTM',mandatory:'C',shortDesc:'DATE/TIME/PERIOD',desc:'A segment indicating the date/time details relating to the references.',repeat:5,length:'',type:'',level:3,children:[
			{id:27020,label:'C507',mandatory:'M',shortDesc:'DATE/TIME/PERIOD',desc:'Date and/or time, or period relevant to the specified date/time/period type.',repeat:1,length:'',type:'',level:4,children:[
				{id:270200,label:'2005',mandatory:'M',shortDesc:'Date or time or period function code qualifier',desc:'Code qualifying the function of a date, time or period.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:270201,label:'2380',mandatory:'C',shortDesc:'Date or time or period text',desc:'The value of a date, a date and time, a time or of a period in a specified representation.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:270202,label:'2379',mandatory:'C',shortDesc:'Date or time or period format code',desc:'Code specifying the representation of a date, time or period.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]}]},
		{id:2703,label:'FTX',mandatory:'C',shortDesc:'FREE TEXT',desc:'A segment with free text information, in coded or clear form, used when additional information is needed but cannot be accommodated within other segments. In computer to computer exchanges such text will normally require the receiver to process this segment manually.',repeat:99999,length:'',type:'',level:3,children:[
			{id:27030,label:'4451',mandatory:'M',shortDesc:'TEXT SUBJECT CODE QUALIFIER',desc:'Code qualifying the subject of the text.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:27031,label:'4453',mandatory:'C',shortDesc:'FREE TEXT FUNCTION CODE',desc:'Code specifying the function of free text.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:27032,label:'C107',mandatory:'C',shortDesc:'TEXT REFERENCE',desc:'Coded reference to a standard text and its source.',repeat:1,length:'',type:'',level:4,children:[
				{id:270320,label:'4441',mandatory:'M',shortDesc:'Free text description code',desc:'Code specifying free form text.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:270321,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:270322,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]},
			{id:27033,label:'C108',mandatory:'C',shortDesc:'TEXT LITERAL',desc:'Free text; one to five lines.',repeat:1,length:'',type:'',level:4,children:[
				{id:270330,label:'4440',mandatory:'M',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:5,children:[]},
				{id:270331,label:'4440',mandatory:'C',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:5,children:[]},
				{id:270332,label:'4440',mandatory:'C',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:5,children:[]},
				{id:270333,label:'4440',mandatory:'C',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:5,children:[]},
				{id:270334,label:'4440',mandatory:'C',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:5,children:[]}]},
			{id:27034,label:'3453',mandatory:'C',shortDesc:'LANGUAGE NAME CODE',desc:'Code specifying the language name.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:27035,label:'4447',mandatory:'C',shortDesc:'FREE TEXT FORMAT CODE',desc:'Code specifying the format of free text.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]}]},
	{id:271,label:'GRP58',mandatory:'C',shortDesc:'STG#GRP59#',desc:'A group of segments indicating information (quantity and amount) for the calculation of the amortization.',repeat:10,length:'',type:'',level:2,children:[
		{id:2710,label:'STG',mandatory:'M',shortDesc:'STAGES',desc:'A segment providing information related to the kind of stage in a process, the total number of stages and the current stage.',repeat:1,length:'',type:'',level:3,children:[
			{id:27100,label:'9421',mandatory:'M',shortDesc:'PROCESS STAGE CODE QUALIFIER',desc:'Code qualifying a stage in a process.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:27101,label:'6426',mandatory:'C',shortDesc:'PROCESS STAGES QUANTITY',desc:'Count of the number of process stages.',repeat:1,length:'0..2',type:'n',level:4,children:[]},
			{id:27102,label:'6428',mandatory:'C',shortDesc:'PROCESS STAGES ACTUAL QUANTITY',desc:'Count of  the actual number of process stages.',repeat:1,length:'0..2',type:'n',level:4,children:[]}]},
		{id:2711,label:'GRP59',mandatory:'C',shortDesc:'QTY#MOA#',desc:'A group of segment indicating quantity and monetary amount related to STG.',repeat:3,length:'',type:'',level:3,children:[
			{id:27110,label:'QTY',mandatory:'M',shortDesc:'QUANTITY',desc:'A segment giving information on quantity relating to STG.',repeat:1,length:'',type:'',level:4,children:[
				{id:271100,label:'C186',mandatory:'M',shortDesc:'QUANTITY DETAILS',desc:'Quantity information in a transaction, qualified when relevant.',repeat:1,length:'',type:'',level:5,children:[
					{id:2711000,label:'6063',mandatory:'M',shortDesc:'Quantity type code qualifier',desc:'Code qualifying the type of quantity.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2711001,label:'6060',mandatory:'M',shortDesc:'Quantity',desc:'Alphanumeric representation of a quantity.',repeat:1,length:'0..35',type:'an',level:6,children:[]},
					{id:2711002,label:'6411',mandatory:'C',shortDesc:'Measurement unit code',desc:'Code specifying the unit of measurement.',repeat:1,length:'0..8',type:'an',level:6,children:[]}]}]},
			{id:27111,label:'MOA',mandatory:'C',shortDesc:'MONETARY AMOUNT',desc:'A segment giving information on monetary amount relating to STG.',repeat:1,length:'',type:'',level:4,children:[
				{id:271110,label:'C516',mandatory:'M',shortDesc:'MONETARY AMOUNT',desc:'Amount of goods or services stated as a monetary amount in a specified currency.',repeat:1,length:'',type:'',level:5,children:[
					{id:2711100,label:'5025',mandatory:'M',shortDesc:'Monetary amount type code qualifier',desc:'Code qualifying the type of monetary amount.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2711101,label:'5004',mandatory:'C',shortDesc:'Monetary amount',desc:'To specify a monetary amount.',repeat:1,length:'0..35',type:'n',level:6,children:[]},
					{id:2711102,label:'6345',mandatory:'C',shortDesc:'Currency identification code',desc:'Code specifying a monetary unit.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2711103,label:'6343',mandatory:'C',shortDesc:'Currency type code qualifier',desc:'Code qualifying the type of currency.',repeat:1,length:'0..3',type:'an',level:6,children:[]},
					{id:2711104,label:'4405',mandatory:'C',shortDesc:'Status description code',desc:'Code specifying a status.',repeat:1,length:'0..3',type:'an',level:6,children:[]}]}]}]}]},
	{id:272,label:'GRP60',mandatory:'C',shortDesc:'DGS#FTX#GRP61#',desc:'A group of segments identifying handling information and dangerous goods and hazardous material information with associated points of contact and communications numbers at the item level.',repeat:999,length:'',type:'',level:2,children:[
		{id:2720,label:'DGS',mandatory:'M',shortDesc:'DANGEROUS GOODS',desc:'A segment identifying dangerous goods and hazardous material information.',repeat:1,length:'',type:'',level:3,children:[
			{id:27200,label:'8273',mandatory:'C',shortDesc:'DANGEROUS GOODS REGULATIONS CODE',desc:'Code specifying a dangerous goods regulation.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:27201,label:'C205',mandatory:'C',shortDesc:'HAZARD CODE',desc:'The identification of the dangerous goods in code.',repeat:1,length:'',type:'',level:4,children:[
				{id:272010,label:'8351',mandatory:'M',shortDesc:'Hazard identification code',desc:'Code identifying a hazard.',repeat:1,length:'0..7',type:'an',level:5,children:[]},
				{id:272011,label:'8078',mandatory:'C',shortDesc:'Additional hazard classification identifier',desc:'To identify an additional hazard classification.',repeat:1,length:'0..7',type:'an',level:5,children:[]},
				{id:272012,label:'8092',mandatory:'C',shortDesc:'Hazard code version identifier',desc:'To identify the version number of a hazard code.',repeat:1,length:'0..10',type:'an',level:5,children:[]}]},
			{id:27202,label:'C234',mandatory:'C',shortDesc:'UNDG INFORMATION',desc:'Information on dangerous goods, taken from the United Nations Dangerous Goods classification.',repeat:1,length:'',type:'',level:4,children:[
				{id:272020,label:'7124',mandatory:'C',shortDesc:'United Nations Dangerous Goods (UNDG) identifier',desc:'The unique serial number assigned within the United Nations to substances and articles contained in a list of the dangerous goods most commonly carried.',repeat:1,length:'4',type:'n',level:5,children:[]},
				{id:272021,label:'7088',mandatory:'C',shortDesc:'Dangerous goods flashpoint description',desc:'To describe the flahspoint of dangerous goods.',repeat:1,length:'0..8',type:'an',level:5,children:[]}]},
			{id:27203,label:'C223',mandatory:'C',shortDesc:'DANGEROUS GOODS SHIPMENT FLASHPOINT',desc:'Temperature at which a vapor can be ignited as per ISO 1523/73.',repeat:1,length:'',type:'',level:4,children:[
				{id:272030,label:'7106',mandatory:'C',shortDesc:'Shipment flashpoint degree',desc:'To specify the value of the flashpoint of a shipment.',repeat:1,length:'3',type:'n',level:5,children:[]},
				{id:272031,label:'6411',mandatory:'C',shortDesc:'Measurement unit code',desc:'Code specifying the unit of measurement.',repeat:1,length:'0..8',type:'an',level:5,children:[]}]},
			{id:27204,label:'8339',mandatory:'C',shortDesc:'PACKAGING DANGER LEVEL CODE',desc:'Code specifying the level of danger for which the packaging must cater.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:27205,label:'8364',mandatory:'C',shortDesc:'EMERGENCY PROCEDURE FOR SHIPS IDENTIFIER',desc:'To identify the emergency procedure number for ships transporting dangerous goods. Synonym: EMS Number.',repeat:1,length:'0..6',type:'an',level:4,children:[]},
			{id:27206,label:'8410',mandatory:'C',shortDesc:'HAZARD MEDICAL FIRST AID GUIDE IDENTIFIER',desc:'To identify a Medical First Aid Guide (MFAG) for hazardous goods.',repeat:1,length:'0..4',type:'an',level:4,children:[]},
			{id:27207,label:'8126',mandatory:'C',shortDesc:'TRANSPORT EMERGENCY CARD IDENTIFIER',desc:'To identify a transport emergency (TREM) card.',repeat:1,length:'0..10',type:'an',level:4,children:[]},
			{id:27208,label:'C235',mandatory:'C',shortDesc:'HAZARD IDENTIFICATION PLACARD DETAILS',desc:'These numbers appear on the hazard identification placard required on the means of transport.',repeat:1,length:'',type:'',level:4,children:[
				{id:272080,label:'8158',mandatory:'C',shortDesc:'Orange hazard placard upper part identifier',desc:'To specify the identity number for the upper part of the orange hazard placard required on the means of transport.',repeat:1,length:'0..4',type:'an',level:5,children:[]},
				{id:272081,label:'8186',mandatory:'C',shortDesc:'Orange hazard placard lower part identifier',desc:'To specify the identity number for the lower part of the orange hazard placard required on the means of transport.',repeat:1,length:'4',type:'an',level:5,children:[]}]},
			{id:27209,label:'C236',mandatory:'C',shortDesc:'DANGEROUS GOODS LABEL',desc:'Markings identifying the type of hazardous goods and similar information.',repeat:1,length:'',type:'',level:4,children:[
				{id:272090,label:'8246',mandatory:'C',shortDesc:'Dangerous goods marking identifier',desc:'To identify the marking of dangerous goods.',repeat:1,length:'0..4',type:'an',level:5,children:[]},
				{id:272091,label:'8246',mandatory:'C',shortDesc:'Dangerous goods marking identifier',desc:'To identify the marking of dangerous goods.',repeat:1,length:'0..4',type:'an',level:5,children:[]},
				{id:272092,label:'8246',mandatory:'C',shortDesc:'Dangerous goods marking identifier',desc:'To identify the marking of dangerous goods.',repeat:1,length:'0..4',type:'an',level:5,children:[]},
				{id:272093,label:'8246',mandatory:'C',shortDesc:'Dangerous goods marking identifier',desc:'To identify the marking of dangerous goods.',repeat:1,length:'0..4',type:'an',level:5,children:[]}]},
			{id:27210,label:'8255',mandatory:'C',shortDesc:'PACKING INSTRUCTION TYPE CODE',desc:'Code specifying a type of packing instruction.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:27211,label:'8179',mandatory:'C',shortDesc:'TRANSPORT MEANS DESCRIPTION CODE',desc:'Code specifying the means of transport.',repeat:1,length:'0..8',type:'an',level:4,children:[]},
			{id:27212,label:'8211',mandatory:'C',shortDesc:'HAZARDOUS CARGO TRANSPORT AUTHORISATION CODE',desc:'Code specifying the authorisation for the transportation of hazardous cargo.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:27213,label:'C289',mandatory:'C',shortDesc:'TUNNEL RESTRICTION',desc:'To specify a restriction for transport through tunnels.',repeat:1,length:'',type:'',level:4,children:[
				{id:272130,label:'8461',mandatory:'C',shortDesc:'Tunnel Restriction Code',desc:'A code indicating a restriction for transport through tunnels.',repeat:1,length:'0..6',type:'an',level:5,children:[]},
				{id:272131,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:272132,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]}]},
		{id:2721,label:'FTX',mandatory:'C',shortDesc:'FREE TEXT',desc:'A segment providing free form text information relating to the dangerous goods.',repeat:5,length:'',type:'',level:3,children:[
			{id:27210,label:'4451',mandatory:'M',shortDesc:'TEXT SUBJECT CODE QUALIFIER',desc:'Code qualifying the subject of the text.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:27211,label:'4453',mandatory:'C',shortDesc:'FREE TEXT FUNCTION CODE',desc:'Code specifying the function of free text.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:27212,label:'C107',mandatory:'C',shortDesc:'TEXT REFERENCE',desc:'Coded reference to a standard text and its source.',repeat:1,length:'',type:'',level:4,children:[
				{id:272120,label:'4441',mandatory:'M',shortDesc:'Free text description code',desc:'Code specifying free form text.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:272121,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:272122,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]},
			{id:27213,label:'C108',mandatory:'C',shortDesc:'TEXT LITERAL',desc:'Free text; one to five lines.',repeat:1,length:'',type:'',level:4,children:[
				{id:272130,label:'4440',mandatory:'M',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:5,children:[]},
				{id:272131,label:'4440',mandatory:'C',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:5,children:[]},
				{id:272132,label:'4440',mandatory:'C',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:5,children:[]},
				{id:272133,label:'4440',mandatory:'C',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:5,children:[]},
				{id:272134,label:'4440',mandatory:'C',shortDesc:'Free text',desc:'Free form text.',repeat:1,length:'0..512',type:'an',level:5,children:[]}]},
			{id:27214,label:'3453',mandatory:'C',shortDesc:'LANGUAGE NAME CODE',desc:'Code specifying the language name.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:27215,label:'4447',mandatory:'C',shortDesc:'FREE TEXT FORMAT CODE',desc:'Code specifying the format of free text.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:2722,label:'GRP61',mandatory:'C',shortDesc:'CTA#COM#',desc:'A group of segments providing contacts and communications numbers associated with dangerous goods information.',repeat:99,length:'',type:'',level:3,children:[
			{id:27220,label:'CTA',mandatory:'M',shortDesc:'CONTACT INFORMATION',desc:'A segment identifying to whom communications should be directed concerning dangerous goods.',repeat:1,length:'',type:'',level:4,children:[
				{id:272200,label:'3139',mandatory:'C',shortDesc:'CONTACT FUNCTION CODE',desc:'Code specifying the function of a contact (e.g. department or person).',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:272201,label:'C056',mandatory:'C',shortDesc:'CONTACT DETAILS',desc:'Code and/or name of a contact such as a department or employee. Code preferred.',repeat:1,length:'',type:'',level:5,children:[
					{id:2722010,label:'3413',mandatory:'C',shortDesc:'Contact identifier',desc:'To identify a contact, such as a department or employee.',repeat:1,length:'0..17',type:'an',level:6,children:[]},
					{id:2722011,label:'3412',mandatory:'C',shortDesc:'Contact name',desc:'Name of a contact, such as a department or employee.',repeat:1,length:'0..256',type:'an',level:6,children:[]}]}]},
			{id:27221,label:'COM',mandatory:'C',shortDesc:'COMMUNICATION CONTACT',desc:'A segment identifying communication numbers of the contacts to whom communications should be directed.',repeat:5,length:'',type:'',level:4,children:[
				{id:272210,label:'C076',mandatory:'M',shortDesc:'COMMUNICATION CONTACT',desc:'Communication number of a department or employee in a specified channel.',repeat:1,length:'',type:'',level:5,children:[
					{id:2722100,label:'3148',mandatory:'M',shortDesc:'Communication address identifier',desc:'To identify a communication address.',repeat:1,length:'0..512',type:'an',level:6,children:[]},
					{id:2722101,label:'3155',mandatory:'M',shortDesc:'Communication means type code',desc:'Code specifying the type of communication address.',repeat:1,length:'0..3',type:'an',level:6,children:[]}]}]}]}]},
	{id:273,label:'GRP62',mandatory:'C',shortDesc:'EFI#CED#COM#RFF#DTM#QTY#',desc:'A group of segments that refers through an external file identification to each of the external files and giving additional information about each of the files.',repeat:99,length:'',type:'',level:2,children:[
		{id:2730,label:'EFI',mandatory:'M',shortDesc:'EXTERNAL FILE LINK IDENTIFICATION',desc:'This segment will identify the external files by indicating the file name, file number and its sequence number in an exchange.',repeat:1,length:'',type:'',level:3,children:[
			{id:27300,label:'C077',mandatory:'M',shortDesc:'FILE IDENTIFICATION',desc:'To identify a file.',repeat:1,length:'',type:'',level:4,children:[
				{id:273000,label:'1508',mandatory:'C',shortDesc:'File name',desc:'Name of a file.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:273001,label:'7008',mandatory:'C',shortDesc:'Item description',desc:'Free form description of an item.',repeat:1,length:'0..256',type:'an',level:5,children:[]}]},
			{id:27301,label:'C099',mandatory:'C',shortDesc:'FILE DETAILS',desc:'To define details relevant to a file.',repeat:1,length:'',type:'',level:4,children:[
				{id:273010,label:'1516',mandatory:'M',shortDesc:'File format name',desc:'Name of a file format.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:273011,label:'1056',mandatory:'C',shortDesc:'Version identifier',desc:'To identify a version.',repeat:1,length:'0..9',type:'an',level:5,children:[]},
				{id:273012,label:'1503',mandatory:'C',shortDesc:'Data format description code',desc:'Code specifying the data format.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:273013,label:'1502',mandatory:'C',shortDesc:'Data format description',desc:'Free form description of the data format.',repeat:1,length:'0..35',type:'an',level:5,children:[]}]},
			{id:27302,label:'1050',mandatory:'C',shortDesc:'SEQUENCE POSITION IDENTIFIER',desc:'To identify a position in a sequence.',repeat:1,length:'0..10',type:'an',level:4,children:[]},
			{id:27303,label:'9450',mandatory:'C',shortDesc:'FILE COMPRESSION TECHNIQUE NAME',desc:'Name of a file compression technique.',repeat:1,length:'0..35',type:'an',level:4,children:[]}]},
		{id:2731,label:'CED',mandatory:'C',shortDesc:'COMPUTER ENVIRONMENT DETAILS',desc:'To give precise definitions of all necessary elements belonging to the configuration of a computer system, e.g. hardware, firmware, operating system, communication and application software',repeat:99,length:'',type:'',level:3,children:[
			{id:27310,label:'1501',mandatory:'M',shortDesc:'COMPUTER ENVIRONMENT DETAILS CODE QUALIFIER',desc:'Code qualifying computer environment details.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:27311,label:'C079',mandatory:'M',shortDesc:'COMPUTER ENVIRONMENT IDENTIFICATION',desc:'To identify parts of a computer environment.',repeat:1,length:'',type:'',level:4,children:[
				{id:273110,label:'1511',mandatory:'C',shortDesc:'Computer environment name code',desc:'Code specifying a computer environment.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:273111,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:5,children:[]},
				{id:273112,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:273113,label:'1510',mandatory:'C',shortDesc:'Computer environment name',desc:'Name of a computer environment.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:273114,label:'1056',mandatory:'C',shortDesc:'Version identifier',desc:'To identify a version.',repeat:1,length:'0..9',type:'an',level:5,children:[]},
				{id:273115,label:'1058',mandatory:'C',shortDesc:'Release identifier',desc:'To identify a release.',repeat:1,length:'0..9',type:'an',level:5,children:[]},
				{id:273116,label:'7402',mandatory:'C',shortDesc:'Object identifier',desc:'Code specifying the unique identity of an object.',repeat:1,length:'0..35',type:'an',level:5,children:[]}]},
			{id:27312,label:'9448',mandatory:'C',shortDesc:'FILE GENERATION COMMAND NAME',desc:'Name of a file generation command.',repeat:1,length:'0..35',type:'an',level:4,children:[]}]},
		{id:2732,label:'COM',mandatory:'C',shortDesc:'COMMUNICATION CONTACT',desc:'To identify a communication number of a department or a person to whom communication should be directed.',repeat:99,length:'',type:'',level:3,children:[
			{id:27320,label:'C076',mandatory:'M',shortDesc:'COMMUNICATION CONTACT',desc:'Communication number of a department or employee in a specified channel.',repeat:1,length:'',type:'',level:4,children:[
				{id:273200,label:'3148',mandatory:'M',shortDesc:'Communication address identifier',desc:'To identify a communication address.',repeat:1,length:'0..512',type:'an',level:5,children:[]},
				{id:273201,label:'3155',mandatory:'M',shortDesc:'Communication means type code',desc:'Code specifying the type of communication address.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]}]},
		{id:2733,label:'RFF',mandatory:'C',shortDesc:'REFERENCE',desc:'A segment giving reference related to the file identified by a previous external file link identification segment',repeat:9,length:'',type:'',level:3,children:[
			{id:27330,label:'C506',mandatory:'M',shortDesc:'REFERENCE',desc:'Identification of a reference.',repeat:1,length:'',type:'',level:4,children:[
				{id:273300,label:'1153',mandatory:'M',shortDesc:'Reference code qualifier',desc:'Code qualifying a reference.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:273301,label:'1154',mandatory:'C',shortDesc:'Reference identifier',desc:'Identifies a reference.',repeat:1,length:'0..70',type:'an',level:5,children:[]},
				{id:273302,label:'1156',mandatory:'C',shortDesc:'Document line identifier',desc:'To identify a line of a document.',repeat:1,length:'0..6',type:'an',level:5,children:[]},
				{id:273303,label:'1056',mandatory:'C',shortDesc:'Version identifier',desc:'To identify a version.',repeat:1,length:'0..9',type:'an',level:5,children:[]},
				{id:273304,label:'1060',mandatory:'C',shortDesc:'Revision identifier',desc:'To identify a revision.',repeat:1,length:'0..6',type:'an',level:5,children:[]}]}]},
		{id:2734,label:'DTM',mandatory:'C',shortDesc:'DATE/TIME/PERIOD',desc:'This segment will convey the date/time details of the external file.',repeat:9,length:'',type:'',level:3,children:[
			{id:27340,label:'C507',mandatory:'M',shortDesc:'DATE/TIME/PERIOD',desc:'Date and/or time, or period relevant to the specified date/time/period type.',repeat:1,length:'',type:'',level:4,children:[
				{id:273400,label:'2005',mandatory:'M',shortDesc:'Date or time or period function code qualifier',desc:'Code qualifying the function of a date, time or period.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:273401,label:'2380',mandatory:'C',shortDesc:'Date or time or period text',desc:'The value of a date, a date and time, a time or of a period in a specified representation.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:273402,label:'2379',mandatory:'C',shortDesc:'Date or time or period format code',desc:'Code specifying the representation of a date, time or period.',repeat:1,length:'0..3',type:'an',level:5,children:[]}]}]},
		{id:2735,label:'QTY',mandatory:'C',shortDesc:'QUANTITY',desc:'The size/volume of the external file identified in the previous external file link identification segment.',repeat:9,length:'',type:'',level:3,children:[
			{id:27350,label:'C186',mandatory:'M',shortDesc:'QUANTITY DETAILS',desc:'Quantity information in a transaction, qualified when relevant.',repeat:1,length:'',type:'',level:4,children:[
				{id:273500,label:'6063',mandatory:'M',shortDesc:'Quantity type code qualifier',desc:'Code qualifying the type of quantity.',repeat:1,length:'0..3',type:'an',level:5,children:[]},
				{id:273501,label:'6060',mandatory:'M',shortDesc:'Quantity',desc:'Alphanumeric representation of a quantity.',repeat:1,length:'0..35',type:'an',level:5,children:[]},
				{id:273502,label:'6411',mandatory:'C',shortDesc:'Measurement unit code',desc:'Code specifying the unit of measurement.',repeat:1,length:'0..8',type:'an',level:5,children:[]}]}]}]}]},
{id:25,label:'UNS',mandatory:'M',shortDesc:'SECTION CONTROL',desc:'A service segment placed at the start of the summary section to avoid segment collision.',repeat:1,length:'',type:'',level:1,children:[
	{id:250,label:'0081',mandatory:'M',shortDesc:'SECTION IDENTIFICATION',desc:'Identification of the separation of sections of a message.',repeat:1,length:'1',type:'a',level:2,children:[]}]},
{id:26,label:'MOA',mandatory:'C',shortDesc:'MONETARY AMOUNT',desc:'A segment giving the total amounts for the whole order message.',repeat:99,length:'',type:'',level:1,children:[
	{id:260,label:'C516',mandatory:'M',shortDesc:'MONETARY AMOUNT',desc:'Amount of goods or services stated as a monetary amount in a specified currency.',repeat:1,length:'',type:'',level:2,children:[
		{id:2600,label:'5025',mandatory:'M',shortDesc:'Monetary amount type code qualifier',desc:'Code qualifying the type of monetary amount.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2601,label:'5004',mandatory:'C',shortDesc:'Monetary amount',desc:'To specify a monetary amount.',repeat:1,length:'0..35',type:'n',level:3,children:[]},
		{id:2602,label:'6345',mandatory:'C',shortDesc:'Currency identification code',desc:'Code specifying a monetary unit.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2603,label:'6343',mandatory:'C',shortDesc:'Currency type code qualifier',desc:'Code qualifying the type of currency.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2604,label:'4405',mandatory:'C',shortDesc:'Status description code',desc:'Code specifying a status.',repeat:1,length:'0..3',type:'an',level:3,children:[]}]}]},
{id:27,label:'CNT',mandatory:'C',shortDesc:'CONTROL TOTAL',desc:'A segment by which control totals may be provided by the sender for checking by the receiver.',repeat:10,length:'',type:'',level:1,children:[
	{id:270,label:'C270',mandatory:'M',shortDesc:'CONTROL',desc:'Control total for checking integrity of a message or part of a message.',repeat:1,length:'',type:'',level:2,children:[
		{id:2700,label:'6069',mandatory:'M',shortDesc:'Control total type code qualifier',desc:'Code qualifying the type of control of hash total.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2701,label:'6066',mandatory:'M',shortDesc:'Control total quantity',desc:'To specify the value of a control quantity.',repeat:1,length:'0..18',type:'n',level:3,children:[]},
		{id:2702,label:'6411',mandatory:'C',shortDesc:'Measurement unit code',desc:'Code specifying the unit of measurement.',repeat:1,length:'0..8',type:'an',level:3,children:[]}]}]},
{id:28,label:'GRP63',mandatory:'C',shortDesc:'ALC#ALI#MOA#',desc:'A group of segments specifying allowances and charges summary totals for the order.',repeat:10,length:'',type:'',level:1,children:[
	{id:280,label:'ALC',mandatory:'M',shortDesc:'ALLOWANCE OR CHARGE',desc:'A segment identifying the charge or allowance type to be summarised.',repeat:1,length:'',type:'',level:2,children:[
		{id:2800,label:'5463',mandatory:'M',shortDesc:'ALLOWANCE OR CHARGE CODE QUALIFIER',desc:'Code qualifying an allowance or charge.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2801,label:'C552',mandatory:'C',shortDesc:'ALLOWANCE/CHARGE INFORMATION',desc:'Identification of allowance/charge information by number and/or code.',repeat:1,length:'',type:'',level:3,children:[
			{id:28010,label:'1230',mandatory:'C',shortDesc:'Allowance or charge identifier',desc:'To identify an allowance or charge.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:28011,label:'5189',mandatory:'C',shortDesc:'Allowance or charge identification code',desc:'Code specifying the identification of an allowance or charge.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]},
		{id:2802,label:'4471',mandatory:'C',shortDesc:'SETTLEMENT MEANS CODE',desc:'Code specifying the means of settlement.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2803,label:'1227',mandatory:'C',shortDesc:'CALCULATION SEQUENCE CODE',desc:'Code specifying a calculation sequence.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2804,label:'C214',mandatory:'C',shortDesc:'SPECIAL SERVICES IDENTIFICATION',desc:'Identification of a special service by a code from a specified source or by description.',repeat:1,length:'',type:'',level:3,children:[
			{id:28040,label:'7161',mandatory:'C',shortDesc:'Special service description code',desc:'Code specifying a special service.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:28041,label:'1131',mandatory:'C',shortDesc:'Code list identification code',desc:'Code identifying a user or association maintained code list.',repeat:1,length:'0..17',type:'an',level:4,children:[]},
			{id:28042,label:'3055',mandatory:'C',shortDesc:'Code list responsible agency code',desc:'Code specifying the agency responsible for a code list.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:28043,label:'7160',mandatory:'C',shortDesc:'Special service description',desc:'Free form description of a special service.',repeat:1,length:'0..35',type:'an',level:4,children:[]},
			{id:28044,label:'7160',mandatory:'C',shortDesc:'Special service description',desc:'Free form description of a special service.',repeat:1,length:'0..35',type:'an',level:4,children:[]}]}]},
	{id:281,label:'ALI',mandatory:'C',shortDesc:'ADDITIONAL INFORMATION',desc:'A segment indicating that allowance or charge specified is subject to special conditions owing to origin, customs preference or commercial factors.',repeat:1,length:'',type:'',level:2,children:[
		{id:2810,label:'3239',mandatory:'C',shortDesc:'COUNTRY OF ORIGIN IDENTIFIER',desc:'To identify the country in which the goods have been produced or manufactured, according to criteria laid down for the application of the Customs tariff or quantitative restrictions, or any measure related to trade.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2811,label:'9213',mandatory:'C',shortDesc:'DUTY REGIME TYPE CODE',desc:'Code specifying a type of duty regime.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2812,label:'4183',mandatory:'C',shortDesc:'SPECIAL CONDITION CODE',desc:'Code specifying a special condition.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2813,label:'4183',mandatory:'C',shortDesc:'SPECIAL CONDITION CODE',desc:'Code specifying a special condition.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2814,label:'4183',mandatory:'C',shortDesc:'SPECIAL CONDITION CODE',desc:'Code specifying a special condition.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2815,label:'4183',mandatory:'C',shortDesc:'SPECIAL CONDITION CODE',desc:'Code specifying a special condition.',repeat:1,length:'0..3',type:'an',level:3,children:[]},
		{id:2816,label:'4183',mandatory:'C',shortDesc:'SPECIAL CONDITION CODE',desc:'Code specifying a special condition.',repeat:1,length:'0..3',type:'an',level:3,children:[]}]},
	{id:282,label:'MOA',mandatory:'M',shortDesc:'MONETARY AMOUNT',desc:'A segment specifying the summary amount for the allowance or charge.',repeat:2,length:'',type:'',level:2,children:[
		{id:2820,label:'C516',mandatory:'M',shortDesc:'MONETARY AMOUNT',desc:'Amount of goods or services stated as a monetary amount in a specified currency.',repeat:1,length:'',type:'',level:3,children:[
			{id:28200,label:'5025',mandatory:'M',shortDesc:'Monetary amount type code qualifier',desc:'Code qualifying the type of monetary amount.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:28201,label:'5004',mandatory:'C',shortDesc:'Monetary amount',desc:'To specify a monetary amount.',repeat:1,length:'0..35',type:'n',level:4,children:[]},
			{id:28202,label:'6345',mandatory:'C',shortDesc:'Currency identification code',desc:'Code specifying a monetary unit.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:28203,label:'6343',mandatory:'C',shortDesc:'Currency type code qualifier',desc:'Code qualifying the type of currency.',repeat:1,length:'0..3',type:'an',level:4,children:[]},
			{id:28204,label:'4405',mandatory:'C',shortDesc:'Status description code',desc:'Code specifying a status.',repeat:1,length:'0..3',type:'an',level:4,children:[]}]}]}]},
{id:29,label:'UNT',mandatory:'M',shortDesc:'MESSAGE TRAILER',desc:'A service segment ending a message, giving the total number of segments in the message (including the UNH & UNT) and the control reference number of the message.',repeat:1,length:'',type:'',level:1,children:[
	{id:290,label:'0074',mandatory:'M',shortDesc:'NUMBER OF SEGMENTS IN A MESSAGE',desc:'The number of segments in a message body, plus the message header segment and message trailer segment.',repeat:1,length:'0..10',type:'n',level:2,children:[]},
	{id:291,label:'0062',mandatory:'M',shortDesc:'MESSAGE REFERENCE NUMBER',desc:'Unique message reference assigned by the sender.',repeat:1,length:'0..14',type:'an',level:2,children:[]}]},
]}]