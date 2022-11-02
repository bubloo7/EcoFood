import cv2


def splitImages(image_name):
    #split images takes in image filename and outputs five images as tuple    
    original_image = cv2.imread(image_name)

    #define refrence points for splitting images
    (h,w) = original_image.shape[:2]
    centerX,centerY = w // 2, (h//2)

    #make split images
    top_left_image = original_image[0:centerY, 0:centerX]
    top_right_image = original_image[0:centerY, centerX:w]
    bottom_left_image = original_image[centerY:h, 0:centerX]
    bottom_right_image = original_image[centerY:h, centerX:w]

    #show images
    '''
    cv2.imshow("Top Left Corner", top_left_image)
    cv2.imshow("Top Right Corner", top_right_image)
    cv2.imshow("Bottom Left Corner", bottom_left_image)
    cv2.imshow("Bottom Right Corner", bottom_right_image)

    cv2.imshow("orignal_image", original_image)
    '''
    


    return original_image, top_left_image,top_right_image, bottom_left_image, bottom_right_image


(og_pic,top_left,top_right,bottom_left,bottom_right) = splitImages("Volleyball.jpg")

cv2.imshow("top_left", top_left)
cv2.waitKey(0)
