function calculate() {
  const salary = document.getElementById("salary");//获取工资
  console.log(salary.value);
  

  const pension = salary.value * 0.08;//养老金
  const medical = salary.value * 0.02;//医疗保险
  const unemployment = salary.value * 0.005;//失业保险
  const providentFund = salary.value * 0.12;//公积金
  const pt = pension + medical + unemployment + providentFund;//个人合计

  const cpension = salary.value * 0.05;//公司养老金
  const cmedical = salary.value * 0.01;//公司医疗保险
  const cunemployment = salary.value * 0.0025;//公司失业保险
  const injury = salary.value * 0.005;//工伤
  const birth = salary.value * 0.005;//生育
  const cprovidentFund = salary.value * 0.06;//公司公积金
  const cpt = cpension + cmedical + cunemployment + injury + birth + cprovidentFund;//公司合计

  const total = pt + cpt;//总计

  document.getElementById("pension").innerHTML = pension.toFixed(2);//显示养老金
  document.getElementById("medical").innerHTML = medical.toFixed(2);//显示医疗保险
  document.getElementById("unemployment").innerHTML = unemployment.toFixed(2);//显示失业保险
  document.getElementById("providentFund").innerHTML = providentFund.toFixed(2);//显示公积金
  document.getElementById("pt").innerHTML = pt.toFixed(2);//显示个人合计

  document.getElementById("cpension").innerHTML = cpension.toFixed(2);//显示公司养老金
  document.getElementById("cmedical").innerHTML = cmedical.toFixed(2);//显示公司医疗保险
  document.getElementById("cunemployment").innerHTML = cunemployment.toFixed(2);//显示公司失业保险
  document.getElementById("injury").innerHTML = injury.toFixed(2);//显示工伤
  document.getElementById("birth").innerHTML = birth.toFixed(2);//显示生育
  document.getElementById("cprovidentFund").innerHTML = cprovidentFund.toFixed(2);//显示公司公积金
  document.getElementById("cpt").innerHTML = cpt.toFixed(2);//显示公司合计

  document.getElementById("total").innerHTML = total.toFixed(2);//显示总计
}