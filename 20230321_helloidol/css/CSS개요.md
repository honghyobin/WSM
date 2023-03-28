#style 적용 3가지 방법
1.<..style="..."> in HTML


selector {
    attribute: value;
}
*
#id 
.class  주어진 값을 class 속성값으로 가진 html요소를 찾아 선택
TAG  a
selector1 selector2    selector1 요소의 자손 selector2 요소를 선택한다
selector1 > selector2  selector1 요소의 자식 중 모든 selector2 
selector1, selector2   우리가 알고 있는, : 선택자 그룹을 생성하는 방법으로 모든 일치하는 노드를 선택
selector1 + selector2  인접선택자로 부르는 선택자(앞에 요소 바로 뒤에 요소)
selector1 ~ selector2   일반형제선택자 : A하고 B가 있을데 같은 계층에 있으면 A뒤에 있는 모든 선택자
                        p~ul:p요소 뒤에 있는 모든 형제 ul 선택
selector:first-child   selector(형제) 요소 중 첫 번째 요소를 선택할때
selector:nth-child(n)  형제 요소 중에서 특정 순서(n)에 있는 요소를 선택할때
selector:hover          요소의 마우스가 올라가는 동안 selector를 선택

우선순위 시험
1. !important
2. #id
3. .class
4. TAG 
5. *
6. 같은 우선순위일 때, 나중에 쓴게 적용