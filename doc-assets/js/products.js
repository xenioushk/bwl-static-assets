$(function () {
  // Update the log text

  const $productThumbUrl = "https://xenioushk.github.io/bwl-static-assets/thumbs/"

  function updatesLogTag(string) {
    let Obj = {
      "Updated:": "<b>Updated:</b>",
      "Fixed:": "<b>Fixed:</b>",
    }

    return string.replace(/Updated:|Fixed:/gi, function (matched) {
      return Obj[matched]
    })
  }

  // Generate Dynamic Log File.
  function generateProductsList(data, $prodType = "templates") {
    let $productContainer

    if ($prodType == "themes") {
      $productContainer = $("#bwl_wp_themes")
    } else if ($prodType == "plugins") {
      $productContainer = $("#bwl_wp_plugins")
    } else {
      $productContainer = $("#bwl_html_templates")
    }

    if ($productContainer.length) {
      data.forEach((element) => {
        var outputHtml = "<li>"

        var $itemTitle = element[0]
        var $envatoLink = element[1]
        var $thumb = element[2]

        outputHtml +=
          `<a href="` +
          $envatoLink +
          `" target="_blank" title="` +
          $itemTitle +
          `">
        <img src="` +
          $productThumbUrl +
          $prodType +
          `/` +
          $thumb +
          `" alt="` +
          $itemTitle +
          `">` +
          $itemTitle +
          `</a>`

        outputHtml += "</li>"

        $productContainer.append(outputHtml)
      })
    }
  }

  // Just add a new row.

  const $themeForestUrl = "https://themeforest.net/item/"
  const $codeCanyonUrl = "https://codecanyon.net/item/"

  var themeProductsData = [
    // Add a new row below this comment.

    ["Knowledge Base WP Theme", "https://1.envato.market/kdesk-wp", "kdesk_wp.jpg"],
    ["Elder Citizen WP Theme", "https://1.envato.market/srcare-wp", "srcare_wp.jpg"],
    ["Blood DonationWP Theme", "https://1.envato.market/rbuddies-wp", "reddrop_buddies_wp.jpg"],
    ["Professional Services WP Theme", "https://1.envato.market/skhana-wp", "sharai_khana_wp.jpg"],
    ["Pet Care WP Theme", "https://1.envato.market/petapalozza-wp", "petapalozza_wp.jpg"],
    ["Functional Petition WP Theme", "https://1.envato.market/appeal-wp", "appeal_wp.jpg"],
    ["Charity WP Theme", "https://1.envato.market/wish-wp", "wish_wp.jpg"],
    ["Computer Repair WP Theme", "https://1.envato.market/restore-wp", "restore_wp.jpg"],
    ["Nature & Environmental WP Theme", "https://1.envato.market/greenlife-wp", "greenlife_wp.jpg"],
    ["Political & Activism WP Theme", "https://1.envato.market/dynamism-wp", "dynamism_wp.jpg"],
  ]
  generateProductsList(themeProductsData, "themes")

  // Plugins.

  var pluginsProductsData = [
    // Add a new row below this comment.

    ["BWL Advanced FAQ Manager", "https://1.envato.market/baf-wp", "baf.png"],
    ["Post To Breaking News Manager", "https://1.envato.market/bnm-wp", "bnm.png"],
    ["BWL Pro Voting Manager", "https://1.envato.market/bpvm-wp", "bpvm.png"],
    ["BWL Knowledgebase Manager", "https://1.envato.market/bkbm-wp", "bkbm.png"],
    ["BWL Poll Manager", "https://1.envato.market/bpm-wp", "bpm.png"],
    ["WooCommerce FAQ Tab", "https://1.envato.market/wpfm-wp", "wpfm.png"],
    ["Woocommerce Attachment Tab", "https://1.envato.market/atfc-wp", "atfc.png"],
    ["WPBakery Searchable Accordion", "https://1.envato.market/usva-wp", "usva.png"],
  ]
  generateProductsList(pluginsProductsData, "plugins")

  // Templates.
  var templatesProductsData = [
    // Add a new row below this comment.

    ["Activism Buddies - Social Campaign & Non Profit", "https://1.envato.market/activism-buddies-html", "activism_buddies.jpg"],
    ["Appeal - Petition Template", "https://1.envato.market/appeal-html", "appeal.jpg"],
    ["Aqua Shatar - Professional Swim Academy", "https://1.envato.market/aqua-shatar-html", "aqua_shatar.jpg"],
    ["Auto Repair - Mechanic Center", "https://1.envato.market/auto-repair-html", "auto_repair_template.jpg"],
    ["Banizoo - Business Service Template", "https://1.envato.market/banizoo-html", "banizoo.jpg"],
    ["Bicycle Fix - Bicycle Repair Center", $themeForestUrl + "bicycle-fix-bicycle-repair-maintenance-and-tuneups-shop-html5-template/20135309", "bicycle_fix_template.jpg"],
    ["Cobbler Master - Shoe Repair Center", $themeForestUrl + "cobbler-mastershoe-repair-and-leather-accessories-service-center/20722930", "cobbler_template.jpg"],
    ["Dynamism - Activism Template", $themeForestUrl + "dynamism-responsive-activism-html5-template/17443407", "dynamism.jpg"],
    ["Ecosma Buddies - Environmenta Activism", $themeForestUrl + "ecosma-buddies-environmental-campaign-activism-html5-template/22221693", "ecosma_buddies.jpg"],
    ["Fit Bone - Physiotherapy and Massage Center", $themeForestUrl + "fit-bone-physiotherapy-and-massage-therapy-center/19868593", "fit_bone_template.jpg"],
    ["Fixer Buddies - Computer & Laptop Repair", $themeForestUrl + "fixer-buddies-computer-laptop-repair-center-html5-template/22389656", "fixer_buddies.jpg"],
    ["Generosity - Charity & Fundraising", $themeForestUrl + "generosity-charity-fundraising-nonprofit-html5-template/20494100", "generosity_template.jpg"],
    ["Greenlife - Nature & Environmental", $themeForestUrl + "greenlife-nature-environmental-nonprofit-html5-template/18628803", "greenlife_template.jpg"],
    ["Knowledge Desk - Knowledgebase Template", $themeForestUrl + "knowledge-desk-responsive-knowledgebase-html5-template/18408729", "kdesk_template.jpg"],
    ["Mind Trainer - Counseling Center", $themeForestUrl + "mind-trainer-psychology-and-counseling-center-html5-template/19682769", "mind_trainer_template.jpg"],
    ["Move Fast - Moving Service", $themeForestUrl + "move-fast-relocation-and-moving-service-html5-template/21002487", "move_fast.jpg"],
    ["Pakkapati - Flooring Service", $themeForestUrl + "pakkapati-flooring-service-html5-template/22627787", "pakkapati.jpg"],
    ["Pet Care - Animal Center", $themeForestUrl + "pet-care-responsive-html5-template/19999552", "pet_care.jpg"],
    ["Political Buddies - Election Campaign & Activism", $themeForestUrl + "political-buddies-election-campaign-activism-html5-template/21471300", "political_buddies.jpg"],
    ["Quala Coat - Law Firm & Lawyers", $themeForestUrl + "quala-coat-law-firm-lawyers-html5-template/22526010", "quala_coat.jpg"],
    ["Repair Geek - Laptop Service Center ", $themeForestUrl + "repair-geek-laptop-and-computer-fixing-service-center-html5-template/20615230", "repair_geek_template.jpg"],
    ["SmartFix - Computer Repair Center", $themeForestUrl + "smartfix-computer-repair-center-html5-template/25748439", "smart_fix.jpg"],
    ["Senior Care - Senior Citizens Support", $themeForestUrl + "senior-care-senior-citizens-elders-support-html5-template/19530660", "srcare_template.jpg"],
    ["Wish - Fundraising & Non-Profit", $themeForestUrl + "wish-charity-fundraising-nonprofit-html5-template/19295978", "wish.jpg"],
    ["Restore - Digital Repair Shop", $themeForestUrl + "restore-computer-mobile-digital-repair-shop-html5-template/19158607", "restore.jpg"],
  ]
  generateProductsList(templatesProductsData)
})
