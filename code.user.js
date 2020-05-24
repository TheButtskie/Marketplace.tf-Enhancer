// ==UserScript==
// @name         Marketplace.tf+ item Categories
// @version      0.1
// @description  Adding item categories to Dashboard items -- easier sorting
// @author       Buttskie
// @include      *://marketplace.tf/dashboard*
// @match        https://marketplace.tf/dashboard#items
// @grant        none
// ==/UserScript==

window.addEventListener('load', function() {

function itemType(i) {
	var changeThis = document.getElementsByClassName('dashboard-item-listing')[i].getElementsByClassName('item-html-name')[0]
	var temp = changeThis.innerHTML;

	var sku = document.getElementsByClassName('dashboard-item-listing')[i].getElementsByClassName('dashboard-item-sku')[0].innerHTML;
	var res = sku.split(";"); //res[0] is the number to compare with

	if (res[0] == 5028 || res[0] == 5030 || res[0] == 5032 || res[0] == 5034 || res[0] == 5035 || res[0] == 5036 || res[0] == 5038 || res[0] == 5056 || res[0] == 5040 || res[0] == 5039 || res[0] == 5051 || res[0] == 5046 || res[0] == 5054 || res[0] == 5037 || res[0] == 5077 || res[0] == 5037 || res[0] == 5031 || res[0] == 5039 || res[0] == 5051 || res[0] == 5054 || res[0] == 5064 || res[0] == 5031 || res[0] == 5027 || res[0] == 5040 || res[0] == 5077 || res[0] == 5065 || res[0] == 5076 || res[0] == 5056 || res[0] == 5032 || res[0] == 5030 || res[0] == 5038 || res[0] == 5029 || res[0] == 5076 || res[0] == 5055 || res[0] == 5027 || res[0] == 5063 || res[0] == 5061 || res[0] == 5029 || res[0] == 5052 || res[0] == 5033 || res[0] == 5053 || res[0] == 5055 || res[0] == 5053 || res[0] == 5028 || res[0] == 5034 || res[0] == 5035 || res[0] == 5033 || res[0] == 5036) {
		changeThis.innerHTML = "Paint " + temp;
	} else if (res[0] == 5021 || res[0] == 5908 || res[0] == 5911 || res[0] == 5821 || res[0] == 5775 || res[0] == 5892 || res[0] == 5906 || res[0] == 5889 || res[0] == 5884 || res[0] == 5898 || res[0] == 5882 || res[0] == 5903 || res[0] == 5862 || res[0] == 5895 || res[0] == 5887 || res[0] == 5805 || res[0] == 5816 || res[0] == 5827 || res[0] == 5848 || res[0] == 5636 || res[0] == 5866 || res[0] == 5901 || res[0] == 5873 || res[0] == 5833 || res[0] == 5841 || res[0] == 5877) {
		changeThis.innerHTML = "Key " + temp;
	} else if (res[0] == 1157 || res[0] == 463 || res[0] == 1172 || res[0] == 1118 || res[0] == 1162 || res[0] == 167 || res[0] == 1115 || res[0] == 30842 || res[0] == 1196 || res[0] == 30840 || res[0] == 1110 || res[0] == 30615 || res[0] == 30570 || res[0] == 30673 || res[0] == 30918 || res[0] == 1106 || res[0] == 1015 || res[0] == 1174 || res[0] == 30922 || res[0] == 30672 || res[0] == 1197 || res[0] == 30921 || res[0] == 30609 || res[0] == 30761 || res[0] == 1107 || res[0] == 30919 || res[0] == 30671 || res[0] == 30763 || res[0] == 30845 || res[0] == 30839 || res[0] == 1120 || res[0] == 30621 || res[0] == 30920 || res[0] == 30843 || res[0] == 30844 || res[0] == 1168 || res[0] == 30618 || res[0] == 30616 || res[0] == 1111 || res[0] == 1113 || res[0] == 463 || res[0] == 30816 || res[0] == 1183 || res[0] == 167 || res[0] == 30876 || res[0] == 30762 || res[0] == 30572 || res[0] == 1108 || res[0] == 1119 || res[0] == 1112) {
		changeThis.innerHTML = "Taunt " + temp;
	} else if (res[0] == 5865 || res[0] == 5822 || res[0] == 5890 || res[0] == 5828 || res[0] == 5817 || res[0] == 5823 || res[0] == 5735 || res[0] == 5885 || res[0] == 5831 || res[0] == 5861 || res[0] == 5068 || res[0] == 5022 || res[0] == 5832 || res[0] == 5807 || res[0] == 5068 || res[0] == 5048 || res[0] == 5660 || res[0] == 5045 || res[0] == 5022 || res[0] == 5041 || res[0] == 5022 || res[0] == 5045 || res[0] == 5041 || res[0] == 5045 || res[0] == 5739 || res[0] == 5070 || res[0] == 5022 || res[0] == 5045 || res[0] == 5022 || res[0] == 5071 || res[0] == 5045 || res[0] == 5022 || res[0] == 5045 || res[0] == 5041 || res[0] == 5022 || res[0] == 5760 || res[0] == 5629 || res[0] == 5630 || res[0] == 5041 || res[0] == 5066 || res[0] == 5022 || res[0] == 5041 || res[0] == 5045 || res[0] == 5639 || res[0] == 5627 || res[0] == 5635 || res[0] == 5022 || res[0] == 5041 || res[0] == 5078 || res[0] == 5883 || res[0] == 5080 || res[0] == 5045 || res[0] == 5656 || res[0] == 5022 || res[0] == 5859 || res[0] == 5806 || res[0] == 5045 || res[0] == 5022 || res[0] == 5842 || res[0] == 5041 || res[0] == 5045 || res[0] == 5041 || res[0] == 5642 || res[0] == 5644 || res[0] == 5761 || res[0] == 5640 || res[0] == 5650 || res[0] == 5712 || res[0] == 5904 || res[0] == 5022 || res[0] == 5909 || res[0] == 5849 || res[0] == 5905 || res[0] == 5041 || res[0] == 5867 || res[0] == 5871 || res[0] == 5902 || res[0] == 5875 || res[0] == 5041 || res[0] == 5022 || res[0] == 5045 || res[0] == 5888 || res[0] == 5045 || res[0] == 5893 || res[0] == 5894 || res[0] == 5897 || res[0] == 5022 || res[0] == 5654 || res[0] == 5022 || res[0] == 5738 || res[0] == 5041 || res[0] == 5708 || res[0] == 5709 || res[0] == 5714 || res[0] == 5715 || res[0] == 5719 || res[0] == 5734 || res[0] == 5041 || res[0] == 5737 || res[0] == 5742 || res[0] == 5652 || res[0] == 5752 || res[0] == 5045 || res[0] == 5774 || res[0] == 5781 || res[0] == 5789 || res[0] == 5790 || res[0] == 5802 || res[0] == 5803 || res[0] == 5648 || res[0] == 5646 || res[0] == 5912) {
		changeThis.innerHTML = "Crate " + temp;
	} else {
		changeThis.innerHTML = "Miscellaneous " + temp;
	}

}

function convertItems() {
	var numElements = document.getElementsByClassName('dashboard-item-listing').length;
	for (var i = 0; i < numElements; i++) {
		itemType(i);
	}

}
convertItems();

});