#  Week 1:
## Learning
## Challenges
## Support 
## My Contribution


# Week 2:
## 📚 Learning
- **TypeScript**:
  - 📝 `any` keyword
  - 🕵️‍♀️ Type inference
  - 🛠️ Create .js file using ts-node
  - 🛒 Built app to add, remove, edit product
  - ✅ Developed to-do API
- **Git**:
  - 🔄 Changed username in an already created Git account

## 🚧 Challenges
- 🔍 Adding a search option in .ts file
- 💻 Using ts commands

## 🤝 Support
- 🆙 Improving syntax

## 🌟 My Contribution
- done static and dynamic code

  # Week 3:
## 🛠️Challenges and solutions
- Problem faced: for accesing properties defining property as  undefined
- Solution to the problem was to use '?' gave solution
- problem faced : for non-nullability assertion the employee property can't be left undefined
- solution to the problem Use the non-null assertion operator '!' to tell TypeScript that practice.id will not be undefined
  
## 🚧 Code base
- updatePractice(practice: Practice): void {
    this.practiceService.updatePractice **(practice.id!, practice).subscribe**({
      next: (data) => {
        const index = this.practices?.findIndex(p => p.id === practice.id);
        if (index !== undefined && index !== -1) {
          this.practices![index] = data;
        }

## Scope of improvement
- 🆙 improved in the field of angular
- learnt to use ng commands
- learnt to create component
- differnce in acessig image through source file and making it accessiable through public
- tried crud operations using typscript in angular

## 🌟 strength
- Improved conceptual and hands-on experience in angular to create app using angular
- improved adding bootstrap file inside app more


