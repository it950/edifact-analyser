from html.parser import HTMLParser

import MyEncoder
from Node import Node
from Stack import Stack
import json


class MyHTMLParser1(HTMLParser):
    stack =  Stack()
    stateStack = Stack()
    level = 1
    index = 0
    state = 0
    # pos = 0
    count =0
    currDivClass = ""
    isChild =  False
    def __init__(self):
        HTMLParser.__init__(self)
        self.htmlcontent = ""
        self.links=[]

    def openFile(self):
        with open('/Users/makai5/Downloads/edifact-orders.html','r',encoding="utf-8") as f:
            content = f.read()
            self.htmlcontent = content

    def getTopNode(self)->Node:

        if len(self.links)==0:
            node = Node()
            node.level = 1
            node.id = self.index+1
            self.links.insert(0,node)
            return node
        if len(self.links) == self.index:
            node = Node()
            node.level = self.level
            node.id = self.index+1
            self.links.insert(self.index, node)
            return node
        else:
            return self.links[self.index]


    def handle_starttag(self, tag, attrs):

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
                            # if self.stack.size()==1:
                            #     self.index += 1
                            #     self.level = 0
                            #     self.stateStack = Stack()
                            # else:
                            if self.stack.size() > 1:#child
                                #self.level+=1
                                # self.stack.peek()['level'] = self.level
                                # newNode = Node()
                                # newNode.level = self.level
                                # pNode = self.getCurrentNode(self.getTopNode())
                                # pNode.children.append(newNode)
                                self.newNode('segment')
                                self.isChild = True
                        elif value =="group":
                            self.state = 30
                            self.currDivClass = "group"
                            self.trackStateStack()
                            # if self.stack.size()==1:
                            #     self.index += 1
                            #     self.level = 0
                            #     self.stateStack = Stack()
                            # else:
                            if self.stack.size() > 1: #child
                                #self.level+=1
                                # self.stack.peek()['level'] = self.level
                                # newNode = Node()
                                # newNode.level = self.level
                                # pNode = self.getCurrentNode(self.getTopNode())
                                # pNode.children.append(newNode)
                                self.newNode('group')
                                self.isChild = True
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
                            #self.trackStateStack()
                        elif value =="level":
                            self.level += 1
                            #self.stack.peek()['level'] = self.level
                            self.currDivClass = "level"
                            # self.pos = self.stack.size()
                            #self.trackStateStack()
                        elif value =="element":
                            # if self.pos!=0 and self.pos == self.stack.size():
                            #     self.level -=1
                            #     self.pos = 0
                            #self.level += 1
                            #self.stack.peek()['level'] = self.level
                            self.state =10
                            self.currDivClass = "element"
                            self.trackStateStack()
                            # newNode = Node()
                            # newNode.level = self.level
                            # pNode = self.getCurrentNode(self.getTopNode())
                            # pNode.children.append(newNode)
                            # print('pNode:',pNode)
                            self.newNode('element')
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
                    f = self.getTopNode()
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

        self.stack.push({'tag': tag, 'state': self.state, 'attrs': attrs, 'level': self.level})


        # print('<%s>' % tag)

    def trackStateStack(self):
        self.stateStack.push({
            'state': self.state, 'pos': self.stack.size()+1, 'divClass': self.currDivClass
        })
    def handle_endtag(self, tag):
        self.count+=1
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



        # print('endtag', self.index, self.state,s,self.stack.size())

        if self.stack.isEmpty():
            self.level = 1
            self.index += 1
            self.stateStack = Stack()
            self.isChild = False
        else:
            t = self.stack.peek()
            if t['level'] != self.level:
                #print('currlevel:', self.level, self.getTopNode().label, self.stack.size(), t, self.currDivClass)
                self.level = t['level']

            # print(self.index,len(self.links),s,self.currDivClass)
            # for s in self.links:
            #     print(s.label)

    def handle_startendtag(self, tag, attrs):
        print('<%s/>' % tag)

    def handle_data(self, data):
        #print('data:',data,',level:',self.level,',div:',self.stack.peek() if self.stack.size()>0 else 'null')
        f = self.getCurrentNode(self.getTopNode())
        if f!= None:
            if self.state ==2:
                f.setLabel(data)
                # print(f,self.stack.size(),self.state)
                # for item in self.stack.items:
                #     print(item)
            elif self.state ==3:
                d = data.strip()
                f.mandatory = d[0]
                f.repeat = d.split()[1]
            elif self.state ==4 or self.state ==24 or self.state ==25:
                f.shortDesc.append(data.strip())
            elif self.state ==7:
                f.desc = data.strip()
                # if '\'' in f.desc:
                #     f.desc.replace('\'','\\\'')
                # print('1:',data,data.isspace(),self.stateStack.peek())
                # for item in self.stack.items:
                #     print(item)
            elif self.state ==6:
                f.setOther(data)

            elif self.state ==11:
                # print('currlevel:',self.level,self.index,self.getTopNode())
                # print('123:', self.index,len(self.links), self.state,   self.stack.size(),self.currDivClass,f)
                # if self.stack.size()>0:
                #     for s in self.stack.items:
                #         print(s)
                label = data.strip()
                f.label.append(label)
            elif self.state ==12:
                f.shortDesc.append(data.strip())
            elif self.state ==13:
                f.other.append(data)
            elif self.state ==14:
                f.desc= data.strip()

    def getCurrentNode(self,topNode)->Node:
        temp = topNode
        l = self.level
        while l > 1:
            if len(temp.children) >0:
                temp = temp.children[-1]
            else:
                # newNode = Node()
                # newNode.label='123'
                # newNode.level = self.level
                # temp.children.append(newNode)
                # temp = newNode
                temp =None
            l -= 1
        return temp

    def newNode(self,str) ->Node:
        l = self.level
        parent = self.links[self.index]
        while l > 2:
            if len(parent.children) == 0:
                newNode = Node()
                newNode.level = parent.level +1
                newNode.htmlClass = str
                newNode.id = 8888
                parent.children.append(newNode)
            parent = parent.children[-1]
            l-=1
        newNode1 = Node()
        newNode1.level = self.level
        newNode1.htmlClass = str
        newNode1.id = parent.id*10+len(parent.children)
        parent.children.append(newNode1)
        return newNode1

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
    str1 ='export default [{id:0,label:\'edifact\',children:['
    hp.links.pop()
    for i in range(len(hp.links)):
        str1=str1 +str(hp.links[i])
    str1 += ']}]'
    print(str1)
    fo = open('edifact.js','w')
    fo.write(str1)
    fo.close()
    # print(hp.links[0].mandatory[0],hp.links[0].mandatory[len(hp.links[0].mandatory)-1])


