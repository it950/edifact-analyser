from html.parser import HTMLParser

class MyHTMLParser(HTMLParser):
    a_text = False
    def __init__(self):
        HTMLParser.__init__(self)
        self.htmlcontent = ""
        self.links=[]

    def openFile(self):
        with open('/Users/ceshi/Downloads/edifact-orders.html','r',encoding="utf-8") as f:
            content = f.read()
            self.htmlcontent = content

    def handle_starttag(self, tag, attrs):
        # print "Encountered the beginning of a %s tag" % tag
        if tag == "div":
            if len(attrs) == 0:
                pass
            else:
                for (variable, value) in attrs:
                    if variable == "class" and value =="segment":
                        self.a_text = True

    def handle_endtag(self, tag):
        if tag == "div":
             self.a_text = False

    def handle_data(self, data):
        if self.a_text:
            print(data)
    # def handle_startendtag(self,tag,attrs):
    #     if tag =="div":
    #         if len(attrs) ==0:
    #             pass
    #         else:
    #             for(variable,value) in attrs:
    #                 if variable =="class" :
    #                     self.links.append(value)
if __name__=="__main__":
    hp = MyHTMLParser()
    hp.openFile()
    # print(hp.htmlcontent)
    hp.feed(hp.htmlcontent)
    hp.close()
    print(hp.links)