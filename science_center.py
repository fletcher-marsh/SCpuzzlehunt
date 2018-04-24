
def getSampCorp(f, sampleAns, corpusAns):
	resA = ""
	resC = ""
	for c in sampleAns:
		resA += f(c)

	for c in corpusAns:
		resC += f(c)

	return (resA, resC)



def getOrd(i):
	a = ord("a")
	return ((i - a) % 26) + a


def shift1(input):
	output = chr(getOrd(ord(input) + 6))
	return output

def shift1corp(input):
	output = chr(getOrd(ord(input) - 6))
	return output

sample1    = "byffi qilfx!"
sample1ans = "hello world!"
corpus1    = "mbiln wonm guey fiha xyfusm."
corpus1ans = "short cuts make long delays."


def shift2(input):
	output = chr(getOrd(ord(input) * 2))
	return output

def shift2corp(input):
	output = chr(getOrd(ord(input) // 2))
	return output

sample2    = "ohmf jknmf"
sample2ans = "wise mouse"
corpus2    = "gdjfm jdif edifm, lndifm modp odifm, ekif mkdim mdeim"
corpus2ans = "games make cakes, quakes sway wakes, coke soaks sacks"


def shift3(input):
	# HINT AT ROUNDING
	output = chr(ord(input) // 2 + 7)
	return output

def shift3corp(input):
	output = chr(getOrd(ord(input) * 2 - 7))
	return output

sample2    = "oa woo, c acy yau omu!"
sample3ans = "oh foo, i hit the bar!"
corpus3    = "qokqayuu wqcumqu cw mo kouu mooay qokqayuuw yamm mwyuomoki cw mooay yuiuwqoquw."
corpus3ans = "computer science is no more about computers than astronomy is about telescopes."


