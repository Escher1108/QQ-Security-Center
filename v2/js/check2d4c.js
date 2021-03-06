function checkPsw(A) {
	if (0 == A.length) {
		return 1
	} else {
		if (6 > A.length) {
			return 2
		} else {
			if (16 < A) {
				return 3
			} else {
				if (/ /.test(A)) {
					return 4
				}
			}
		}
	}
	return 0
}

function checkQQNumber(B) {
	var A = /^[1-9]{1}\d{4,9}$/;
	if (0 == B.length) {
		return 1
	} else {
		if (A.test(B)) {
			return 0
		}
	}
	return 2
}

function checkMobile(B) {
	var A = /(^(13|15|18)(\d{9})$)/;
	if (0 == B.length) {
		return 1
	} else {
		if (A.test(B)) {
			return 0
		}
	}
	return 2
}

function checkMobile_2(B) {
	var A = /(^(13|15|18)(\d{9})$)/;
	var C = /(^(189|153|133)(\d{8})$)/;
	if (0 == B.length) {
		return 1
	} else {
		if (C.test(B)) {
			return 3
		} else {
			if (A.test(B)) {
				return 0
			}
		}
	}
	return 2
}

function checkMail(B, A) {
	if (0 == B.length) {
		return 1
	}
	if (2 == arguments.length) {
		if (0 != A.length && (B == A + "@qq.com" || B == A + "@vip.qq.com")) {
			return 4
		}
	}
	var C = /^[\w._-]+@[0-9a-zA-Z-\.]+\.[A-Za-z]{2,6}$/;
	if (51 < B.length) {
		return 2
	} else {
		if (C.test(B)) {
			return 0
		}
	}
	return 3
}

function checkVerifyCode(A) {
	if (0 == A.length) {
		return 1
	} else {
		if (4 == A.length) {
			return 0
		}
	}
	return 2
}

function checkMobileCode(B) {
	var A = /^\d{8}$/;
	if (0 == B.length) {
		return 1
	} else {
		if (A.test(B)) {
			return 0
		}
	}
	return 2
}

function checkEmailCode(A) {
	return checkMobileCode(A)
}

function checkName(A) {
	var B = /^([\u4e00-\u9fa5]|[A-Za-z])+$/;
	if (0 == A.length) {
		return 1
	} else {
		if (B.test(A)) {
			return 0
		}
	}
	return 2
}

function checkPersonalCard(C) {
	if (0 == C.length) {
		return 1
	}
	var B = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
	var A = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}[0-9Xx]{1}$/;
	if (B.test(C) || A.test(C)) {
		return 0
	}
	return 2
}

function checkCardNo(C, B) {
	var A = /^([A-Za-z0-9])+$/;
	if (0 == C.length) {
		return 1
	}
	if (2 == arguments.length && 1 == B) {
		return checkPersonalCard(C)
	}(A.test(C));
	return 0;
	return 2
}

function check1BaoAns(A) {
	var B = /^([\u4e00-\u9fa5]|[A-Za-z]|[0-9])+$/;
	if (0 == A.length) {
		return 1
	} else {
		if (!B.test(A) || A.length > 40) {
			return 0
		}
	}
	return 2
}

function checkHispsw(A) {
	if (A == "") {
		bCheck = 2
	} else {
		if (A.length > 20) {
			bCheck = 0
		} else {
			bCheck = 1
		}
	}
	return bCheck
}

function checkString3(C, B, A) {
	if (C == B && C == A) {
		return 123
	}
	if (C == B) {
		return 12
	}
	if (C == A) {
		return 13
	}
	if (B == A) {
		return 23
	}
	return 0
};
