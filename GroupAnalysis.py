from html.parser import HTMLParser

from Node import Node
from Stack import Stack

class MyHTMLParser2(HTMLParser):
    stack =  Stack()
    stateStack = Stack()
    level = 0
    index = -1
    state = 0
    pos = 0
    currDivClass = ""
    def __init__(self):
        HTMLParser.__init__(self)
        self.htmlcontent = ""
        self.links=[]

    def openFile(self):
        with open('/Users/makai5/Downloads/edifact-orders.html','r',encoding="utf-8") as f:
            content = f.read()
            self.htmlcontent = content

    def getNode(self)->Node:

        if(len(self.links)==0):
            node = Node()
            self.links.insert(0,node)
            return node
        if(self.links[self.index] == None):
            node = Node()
            self.links.insert(self.index, node)
            return node
        else:
            return self.links[self.index]


    def handle_starttag(self, tag, attrs):
        self.stack.push({'tag': tag, 'state': self.state})
        if tag == "div":
            if len(attrs) == 0:
                pass
            else:
                for (variable, value) in attrs:
                    if variable == "class":
                        if value =="segment":
                            self.state = 0
                            self.currDivClass = "segment"
                            self.trackStateStack()
                            if self.stack.isEmpty():
                                self.index += 1
                                self.level = 0
                                self.stateStack = Stack()
                        elif value =="header_additional_info":
                            self.state = 5
                            self.currDivClass = "header_additional_info"
                            self.trackStateStack()
                        elif value =="header_purpose":
                            self.state = 7
                            self.currDivClass = "header_purpose"
                            self.trackStateStack()
                        elif value =="standard":
                            self.level += 1
                            self.currDivClass = "standard"
                            self.trackStateStack()
                        elif value =="level":
                            self.level += 1
                            self.currDivClass = "level"
                            self.pos = self.stack.size()
                            self.trackStateStack()
                        elif value =="element":
                            if self.pos!=0 and self.pos == self.stack.size():
                                self.level -=1
                                self.pos = 0
                            self.state =10
                            self.currDivClass = "element"
                            self.trackStateStack()
                            newNode = Node()
                            newNode.level = self.level
                            pNode = self.getParentNode(self.getNode())
                            pNode.children.append(newNode)
                        elif  "element_name" in value:
                            self.state = 11
                            self.currDivClass = "element_name"
                            self.trackStateStack()
                        elif value =="element_description":
                            self.state = 12
                            self.currDivClass = "element_description"
                            self.trackStateStack()
                        elif value =="element_additional_info":
                            self.currDivClass = "element_additional_info"
                            self.trackStateStack()
                        elif value =="element_purpose":
                            self.state = 14
                            self.currDivClass = "element_purpose"
                            self.trackStateStack()


        if tag == "a":
            for (variable, value) in attrs:
                if variable == "href" and self.currDivClass == 'segment':
                    f = self.getNode()
                    f.href = value
        if tag == "span":
            for (variable, value) in attrs:
                if variable == "class":
                    if value =="tag_name":
                        self.state = 2
                        self.trackStateStack()
                    elif value == "g_r":
                        self.state = 3
                        self.trackStateStack()
                    elif value == "header_description_inner":
                        self.state = 4
                        self.trackStateStack()
                    elif value == "g_item_s":
                        self.state = 24
                        self.trackStateStack()
                    elif value == "g_item_g":
                        self.state = 25
                        self.trackStateStack()
        if tag == "li":
            if self.currDivClass == "element_additional_info":
                self.state  = 13
                self.trackStateStack()
            if self.currDivClass == "header_additional_info":
                self.state  = 6
                self.trackStateStack()




        # print('<%s>' % tag)

    def trackStateStack(self):
        self.stateStack.push({
            'state': self.state, 'pos': self.stack.size(), 'divClass': self.currDivClass
        })
    def handle_endtag(self, tag):
        # print('</%s>' % tag, self.state, self.stack.size(), self.stateStack.size())
        # for str in self.stateStack.items:
        #     print(str['pos'],str['state'],str['divClass'])
        s = self.stateStack.peek()
        if s['pos'] == self.stack.size():
            self.stateStack.pop()
            if self.stateStack.size()>0:
                s = self.stateStack.peek()
                self.state = s['state']
        else:
            self.state =888  #仅限两个状态是挨着的父子的，而且父内容在子tag后面
        self.stack.pop()


    def handle_startendtag(self, tag, attrs):
        print('<%s/>' % tag)

    def handle_data(self, data):
        f = self.getNode()
        if self.state ==2:
            f.setLabel(data)
            print(f,self.stack.size(),self.state)
            for item in self.stack.items:
                print(item)
        elif self.state ==3:
            f.mandatory = data.strip()
        elif self.state ==4 or self.state ==24 or self.state ==25:
            f.shortDesc.append(data.strip())
        elif self.state ==7:
            f.desc = data.strip()
            print('1:',data,data.isspace(),self.stateStack.peek())
            for item in self.stack.items:
                print(item)
        elif self.state ==6:
            f.setOther(data)

        elif self.state ==11:
            curr =  self.getParentNode(f).children[-1]
            curr.label.append(data)
        elif self.state ==12:
            curr =  self.getParentNode(f).children[-1]
            curr.shortDesc.append(data.strip())
        elif self.state ==13:
            curr =  self.getParentNode(f).children[-1]
            curr.other.append(data)
        elif self.state ==14:
            curr =  self.getParentNode(f).children[-1]
            curr.desc= data.strip()

    def getParentNode(self,topNode)->Node:
        temp = topNode
        l = self.level
        while l > 1:
            if len(temp.children) >0:
                temp = temp.children[-1]
            l -= 1
        return temp

    # def handle_comment(self, data):
    #     print('<!-- -->')

    def handle_entityref(self, name):
        print('&%s;' % name)

    def handle_charref(self, name):
        print('&#%s;' % name)

if __name__=="__main__":
    hp = MyHTMLParser1()
    hp.openFile()
    # print(hp.htmlcontent)
    hp.feed(hp.htmlcontent)
    hp.close()
    print(hp.links[0])
    for children in hp.links[0].children:
        print("  "+str(children.level), children)
        if len(children.children)>0 :
            for children1 in children.children:
                print("     " + str(children1.level), children1)
