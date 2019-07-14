class Node():
    def __init__(self,mandatory=False,desc="",repeat=1,length="",type="",htmlClass="",level=0,href=""):
        self.label = []
        self.mandatory = mandatory
        self.shortDesc = []
        self.desc = desc
        self.repeat = repeat
        self.length = length
        self.type = type
        self.htmlClass = htmlClass
        self.level = level
        self.children = []
        self.href = href
        self.other = []
        self.id = 9999

    def setChildren(self,node):
        self.children.append(node)

    def setOther(self,string):
        self.other.append(string)

    def setLabel(self,string):
        self.label.append(string)

    def getMandatory(self)->str:
        if self.mandatory!='M' or self.mandatory!='C':
            if len(self.other)>0:
                if 'Mandatory' in self.other[0]:
                    self.mandatory = 'M'
                elif 'Conditional' in self.other[0]:
                    self.mandatory = 'C'
        return str(self.mandatory)

    def getShortDesc(self)->str:
        str = ''
        if len(self.shortDesc)>0:
            for i in range(len(self.shortDesc)):
                if self.shortDesc[i].strip()!='':
                    str=str+ self.shortDesc[i]+'#'
                    if i == (len(self.shortDesc)-1):
                        str = str[:-1]
        return str

    def getType(self)->str:
        if len(self.other) == 3:
            self.type = self.other[1].split(':')[1].strip()
            self.length = self.other[2].split(':')[1].strip()

    def getTab(self)->str:
        tab = ''
        for j in range(self.level):
            tab += '\t'
        return tab

    def getChildren(self)->str:
        child = ''

        tab = self.getTab()
        if len(self.children)>0:
            child ='\n'
            for i in range(len(self.children)):
                child = child + tab + str(self.children[i])
                if (i+1)==len(self.children):
                    child = child[:-2]

        return child

    def __str__(self) -> str:
        self.getType()
        # return "{label:'" + str(self.label[0] if len(self.label)>0 else 'null')+",mandatory:'" + self.getMandatory()+"',shortDesc:'" + self.getShortDesc()+"',desc:'" + self.desc + "',repeat:'" + str(self.repeat) +\
        # "',length:'" + self.length+"',type:'" + self.type + "','htmlClass':'" + self.htmlClass + "','level':'" + str(self.level) +"',   'children':["+self.getChildren()+"],'href':'" +\
        #        self.href+"','other':'" + '#'.join(str(i) for i in self.other)+"'},\n"


        return "{id:"+str(self.id)+",label:'" + str(self.label[0] if len(self.label)>0 else 'null')+"',mandatory:'" + self.getMandatory()+"',shortDesc:'" + self.getShortDesc()+"',desc:'" + self.desc + "',repeat:" + str(self.repeat) +\
        ",length:'" + self.length+"',type:'" + self.type + "',level:" + str(self.level) +",children:["+self.getChildren()+"]},\n"







